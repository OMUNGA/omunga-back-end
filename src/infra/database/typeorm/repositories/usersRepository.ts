import { getRepository, Repository } from 'typeorm'
import { InputCreateUserDto } from 'usecases/user/create/create.user.dto'
import { Users } from '../entities/user'

export class UsersRepositories {
  private repository: Repository<Users>

  constructor () {
    this.repository = getRepository(Users)
  }

  async create (data: InputCreateUserDto): Promise<void> {
    const user = this.repository.create(data)

    await this.repository.save(user)
  }
 
  
}