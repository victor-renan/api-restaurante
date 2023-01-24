import "dotenv/config";
import "reflect-metadata"
import { DataSource } from "typeorm";
import { Prato } from "./entities/Prato";

export const dataSource: DataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(String(process.env.DB_PORT)),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [Prato],
    migrations: [__dirname + "src/models/migrations"],
    synchronize: true,
})
