import { User, UserProps } from "../entities/user";
import { v4 as uuid } from "uuid";


export default class UserFactory {

    public static createUser(props: UserProps): User {
        const user = new User(props, uuid());
        return user;
    }

}