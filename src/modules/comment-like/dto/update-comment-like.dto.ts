import { PartialType } from '@nestjs/swagger';
import { CreateCommentLikeDto } from './create-comment-like.dto';

export class UpdateCommentLikeDto extends PartialType(CreateCommentLikeDto) {}
