import { UserProps } from '../../../../domain/users/entities/user';
import UserRepositoryInterface from '../../../../domain/users/repository/user-repository.interface';
import { AppDataSource } from '../../../../infra/database/connections';
import { Repository } from 'typeorm';
import { Users } from '../entities/user';

export class UsersTypeormRepository implements UserRepositoryInterface {
	private repository: Repository<Users>;

	constructor() {
		this.repository = AppDataSource.getRepository(Users)
	}
	
	findyByEmail(email: string): Promise<Data> {
		throw new Error('Method not implemented.');
	}

	public async create(entity: UserProps): Promise<void> {
		const user = this.repository.create(entity);
		await this.repository.save(user);
	}

	public async Search(entity: string): Promise<void> {
		throw new Error('Method not implemented.');
	}



	public async update(entity: UserProps): Promise<void> {
		throw new Error('Method not implemented.');
	}
	public async find(id: string): Promise<UserProps> {
		throw new Error('Method not implemented.');
	}
	public async findAll(): Promise<UserProps[]> {
		return await this.repository.find();
	}
}
