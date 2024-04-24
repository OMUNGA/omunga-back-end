import { CreateUserDTO } from '../../dtos/Create-user.dto';
import { UpdateUserDTO } from '../../dtos/Update-user.dto ';
import { User } from '@prisma/client';
import { CreateUsersRepository } from '../createUserRepository';
import { Injectable } from '@nestjs/common';
import { ProfileOutput } from '../../dtos/profile.dto';
import { Users } from '../../entities/user';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PrismaCreateUserRepository implements CreateUsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO): Promise<Users> {
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        bio: data.bio,
        phone: data.phone,
        username: data.username,
        password: data.password,
      },
    });

    return user;
  }
  async findByEmail(email: string): Promise<Users> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string): Promise<Users> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  }

  async remove({ id }: { id: string }): Promise<Users> {
    return await this.prisma.user.delete({ where: { id: id } });
  }
  async update(data: UpdateUserDTO): Promise<Users> {
    return this.prisma.user.update({
      where: { id: data.userID },
      data: {
        name: data.name,
        username: data.username,
        email: data.email,
        bio: data.bio,
        phone: data.phone,
        password: data.password,
      },
    });
  }

  async findAll(): Promise<Users[]> {
    return this.prisma.user.findMany({ where: { deletedAt: false } });
  }

  async profile(userId: string): Promise<ProfileOutput> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const followers = await this.prisma.follower.findMany({
      where: { userTofollowID: userId },
      include: { user: true },
    });

    const following = await this.prisma.follower.findMany({
      where: { userID: userId },
      include: { user: true },
    });

    return { user, followers, following };
  }
}
