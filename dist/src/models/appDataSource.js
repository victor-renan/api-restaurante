"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Prato_1 = require("./entities/Prato");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(String(process.env.DB_PORT)),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [Prato_1.Prato],
    migrations: ["src/models/migrations"],
    synchronize: true,
    logging: true,
});
//# sourceMappingURL=appDataSource.js.map