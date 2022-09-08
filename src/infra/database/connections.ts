import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'


export const Connections = new DataSource({
	type: 'postgres',
	host:  'localhost',
	port: 5432,
	username: 'omunga',
	password: 'pxoW3sFF2t3gArReSs8L',
	database: 'omunga',
	// entities: [`${__dirname}/infra/database/typeorm/entities/*.{ts,js}`],
	entities: [`../../../src/infra/database/typeorm/entities/*.{ts,js}`],
	// migrations: [`${__dirname}/nfra/database/typeorm/migrations/*.{ts,js}`],
	migrations: [`../../../src/infra/database/typeorm/migrations/*.{ts,js}`],
})

  