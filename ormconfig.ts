module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ghost',
  password: 'ghost',
  database: 'omunga',
  entities: [
    './src/infra/database/typeorm/entities/*.ts'],
  migrations: [
    './src/infra/database/typeorm/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/infra/database/typeorm/migrations/'
  }
}