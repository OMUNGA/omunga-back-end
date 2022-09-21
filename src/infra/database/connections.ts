import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'


export const AppDataSource =  new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST ,
	port: Number(process.env.DB_PORT),  
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [`dist/src/infra/database/typeorm/entities/*.{ts,js}`],
	migrations: [`dist/src/infra/database/typeorm/migrations/*.{ts,js}`],
	synchronize: true
}) 