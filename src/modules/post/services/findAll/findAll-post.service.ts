import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';

@Injectable()
export class FindAllPostService {
  constructor(private readonly postRepo: PostRepository) {}

  async findAll() {
    try {
      return this.postRepo.findAll();
    } catch (error) {
      throw error;
    }
  }
}
