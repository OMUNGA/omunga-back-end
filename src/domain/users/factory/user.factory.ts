import { User, UserProps } from "../../../domain/users/entities/user";
import { v4 as uuid } from "uuid";


export default class UserFactory {

    public static createUser(props: UserProps): User {
        console.log("vindo de user factory", props)
        const user = new User(props, uuid());
        return user;
    }

}