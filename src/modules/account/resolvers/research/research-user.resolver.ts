import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserOutput } from '../../dtos/user';
import { SearchUserService } from '../../services/search/search.service';

@Resolver("search-user")
export class SearchUsersResolver {
  constructor(private readonly searchService: SearchUserService) {}

  @Query(() => [UserOutput])
  async searchUsers(
    @Args('searchInput') searchInput: string
  ) {
    return this.searchService.search(searchInput);
  }
}
