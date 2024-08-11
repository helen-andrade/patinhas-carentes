import { DataSource } from "typeorm";

export const mySQL = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/drivers/typeorm/entities/**/*.ts"]
});

export function makeDBConnection() {
  if (
    !process.env.DB_HOST ||
    !process.env.DB_PORT ||
    !process.env.DB_USERNAME ||
    !process.env.DB_PASSWORD ||
    !process.env.DB_DATABASE
  ) {
    throw new Error("Missing required database configuration in environment variables.");
  }

  mySQL.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((error) => console.error("Error during Data Source initialization:", error));
}
