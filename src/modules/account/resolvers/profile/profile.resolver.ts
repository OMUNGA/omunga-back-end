import {  UseGuards } from '@nestjs/common';
import { ProfileService } from '../../services/profile/profile.service';
import { ProfileOutput } from '../../dtos/profile.dto';
import { GqlAuthGuard } from '../../guards/jwt-auth.guard';
import { CurrentUser } from '../../decorator/current-user.decorator';
import { Query, Resolver } from '@nestjs/graphql';
import { Users } from '../../entities/user';

@Resolver()
export class ProfileUserResolver {
  constructor(private readonly patientService: ProfileService) {}
  
  @UseGuards(GqlAuthGuard)
  @Query(() => ProfileOutput)
  async ProfileUser(
    @CurrentUser() user: Users,
  ): Promise<ProfileOutput> {
    console.log("usuario logado", user.id)
    return await this.patientService.profile(user.id);
  }
}
