import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class Users {
	@PrimaryColumn()
	readonly _id?: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	email: string;

	@Column()
	phone: number;

	@Column()
	bio: string;

	@Column()
	photo: string;

	@Column()
	password: string;

	@CreateDateColumn()
	created_at: Date;

	@CreateDateColumn()
	updated_at: Date;

	constructor() {
		if (!this._id) {
			this._id = uuidv4();
		}
	}
}
