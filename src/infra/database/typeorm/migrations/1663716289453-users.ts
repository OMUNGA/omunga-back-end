import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1663716289453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: '_id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: 'firstName',
                        type: 'varchar'
                    },
                    {
                        name: 'lastName',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'bio',
                        type: 'varchar'
                    },
                    {
                        name: 'photo',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                        
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
