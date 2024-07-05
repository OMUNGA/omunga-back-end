import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserOutput } from '../../../account/dtos/user';
import { GqlAuthGuard } from '../../../account/guards/jwt-auth.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { RemoveCommentReplyService } from '../../services/remove/remove-commentReply.service';
import { commentReply } from '../../entities/comment-reply.entity';

@UseGuards(GqlAuthGuard)
@Resolver()
export class RemoveCommentReplyResolver {
  constructor(private removeCommentReply: RemoveCommentReplyService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => commentReply)
  async removeComment(@Args('id', { type: () => String }) id: string) {
    return await this.removeCommentReply.remove(id);
  }
}
