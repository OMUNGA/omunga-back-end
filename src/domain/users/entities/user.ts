import crypto from "crypto";

export type UserProps = {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: number;
    bio?: string;
    photo?: string;
    password: string;
};

export class User {
    private _props: UserProps;

    private algorithm = 'aes-256-cbc';

    private key = crypto.randomBytes(32);

    private iv = crypto.randomBytes(16);

    constructor(props: UserProps, id: string) {
        this._props = {
            ...props,
            _id: props._id || id,
            phone: props.phone || 0,
            bio: props.bio || "",
            photo: props.photo || ""
        };
        this.passwordEncrypt()

        console.log(this._props)
    }

    get Props(): UserProps {
        return this._props
    }

    changeName(firstName: string, lastName: string) {
        const firstNameValid = this.validChangeFirstName(firstName)
        const lastNameValid = this.validChangeLastName(lastName)
        this._props.firstName = firstNameValid
        this._props.lastName = lastNameValid
    }

    public VerifyPassword(password: string): boolean {
        const encryptedText = Buffer.from(this._props.password, 'hex');

        const decipher = crypto.createDecipheriv(
            this.algorithm, Buffer.from(this.key), this.iv);
      
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        if (decrypted.toString() == password) {
            return true;
        }
        return false;
    }

    private passwordEncrypt() {
        const cipher = crypto.createCipheriv(
            this.algorithm, this.key, this.iv);

        let encrypted = cipher.update(this._props.password);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        this._props.password = encrypted.toString("hex");
    }

    changeEmail(email: string) {
        this._props.email = email;
    }

    changePhone(phone: number) {
        this._props.phone = phone;
    }

    changePhoto(photo: string) {
        this._props.photo = photo;
    }

    changeBio(bio: string) {
        this._props.bio = bio;
    }

    private validChangeLastName(lastName: string): string {
        if (lastName == "") {
            return this._props.lastName
        }
        return lastName
    }

    private validChangeFirstName(firstName: string): string {
        if (firstName == "") {
            return this._props.firstName
        }
        return firstName
    }

}