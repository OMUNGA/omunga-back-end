import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginSocialNetworkService {
  constructor(private readonly primas: PrismaService) {}
}
