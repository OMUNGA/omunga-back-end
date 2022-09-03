require("dotenv");


const postgres = {
  type: "postgres",
  host:
    process.env.ENVIRONMENT === "local" && process.env.MIGRATION
      ? "localhost"
      : process.env.POSTGRES_DB_HOST,
  port: process.env.POSTGRES_DB_PORT,
  username: process.env.POSTGRES_DB_USERNAME,
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DB_DATABASE,
  entities: [`.src/infra/database/typeorm/entities/*.ts`],
  migrations: [`./src/infra/database/typeorm/migrations/*.ts`],
  cli: {
    migrationsDir: './src/infra/database/typeorm/migrations/',
  },
};

if (process.env.ENVIRONMENT === "dist") {
  Object.assign(postgres);
}
if (process.env.ENVIRONMENT === "dist-prod") {
  Object.assign(postgres);
}

module.exports = postgres;