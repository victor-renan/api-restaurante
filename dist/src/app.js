"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const pratoRoutes_1 = require("./routes/pratoRoutes");
const appDataSource_1 = require("./models/appDataSource");
const app = (0, express_1.default)();
const PORT = parseInt(String(process.env.PORT));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(pratoRoutes_1.pratoRoutes);
appDataSource_1.dataSource.initialize()
    .then(() => {
    console.log("DB initializated!");
    app.listen(PORT, () => {
        console.log(`Server running on localhost:${PORT}`);
    });
})
    .catch((err) => {
    throw new Error(err);
});
//# sourceMappingURL=app.js.map