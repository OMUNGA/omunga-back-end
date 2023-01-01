import { PartialType } from '@nestjs/swagger';
import { CreatePostLikeDto } from './create-post-like.dto';

export class UpdatePostLikeDto extends PartialType(CreatePostLikeDto) {}
