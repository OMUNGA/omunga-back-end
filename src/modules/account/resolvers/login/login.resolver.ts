import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { LoginService } from '../../services/login/login.service';
import { LoginDTO, LoginOutput } from '../../dtos/Login.dto';

@Resolver()
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  @Mutation(() => LoginOutput)
  async sigIn(
    @Args('data')
    data: LoginDTO,
  ): Promise<LoginOutput> {
    const response = await this.loginService.validateUser(data);
    return {
      user: response.user,
      token: response.token,
      expiresIn: response.expiresIn,
    };
  }
}
