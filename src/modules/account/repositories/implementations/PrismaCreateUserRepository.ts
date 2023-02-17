import { CreateUserDTO } from '../../dtos/Create-user.dto';
import { PrismaService } from '../../../../prisma/prisma.service';
import { UpdateUserDTO } from '../../dtos/Update-user.dto ';
import { User } from '@prisma/client';
import { CreateUsersRepository } from '../createUserRepository';
import { Injectable } from '@nestjs/common';
import { ProfileDTO } from '../../dtos/profile.dto';

@Injectable()
export class PrismaCreateUserRepository implements CreateUsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data: data,
    });

    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  }

  async remove({ id }: { id: string }): Promise<User> {
    return await this.prisma.user.delete({ where: { id: id } });
  }
  async update(id: string, data: UpdateUserDTO): Promise<User> {
    return this.prisma.user.update({
      where: { id: id },
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        bio: data.bio,
        phone: data.phone,
        password: data.password,
        photo: data.photo,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ where: { deletedAt: false } });
  }

  async profile(userId: string): Promise<ProfileDTO> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const followers = await this.prisma.follower.findMany({
      where: { userTofollowID: userId },
      include: { followersUser: true },
    });

    const following = await this.prisma.follower.findMany({
      where: { userID: userId },
      include: { following: true },
    });

    return { user, followers, following };
  }
}
