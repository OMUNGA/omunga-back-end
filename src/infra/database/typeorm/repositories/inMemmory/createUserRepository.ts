import { User } from 'domain/users/entities/user';
import UserRepositoryInterface from 'domain/users/repository/user-repository.interface';
import { Users } from '../../entities/inMemmory/users';

export class CreateUserRepositoryInMemmory implements UserRepositoryInterface {
	users: Users[] = [];

	public Search(entity: string): Promise<void> {
		throw new Error('Method not implemented.');
	}

	public create(entity: User): Promise<void> {
		throw new Error('Method not implemented.');
	}

	public update(entity: User): Promise<void> {
		throw new Error('Method not implemented.');
	}

	public find(id: string): Promise<User> {
		throw new Error('Method not implemented.');
	}
	public findAll(): Promise<User[]> {
		throw new Error('Method not implemented.');
	}

	public findyByEmail(email: string): Promise<User> {
		throw new Error('Method not implemented.');
	}
}
