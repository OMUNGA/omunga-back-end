import RepositoryInterface from "domain/generics/repository/repository-interface";
import { User } from "../entities/user";



export default interface UserRepositoryInterface
    extends RepositoryInterface<User> {
        Search(entity: string): Promise<void>;
        findyByEmail(email: string): Promise<User>
    }  