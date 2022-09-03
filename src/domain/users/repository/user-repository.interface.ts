import RepositoryInterface from '../../../domain/generics/repository/repository-interface';
import { UserProps } from '../entities/user';

export default interface UserRepositoryInterface
	extends RepositoryInterface<UserProps> {
	Search(entity: string): Promise<void>;
	findyByEmail(email: string): Promise<Data>;
}
