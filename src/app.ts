import "dotenv/config";
import "reflect-metadata"
import cors from "cors";
import express, { Express } from "express"
import bodyParser from "body-parser"
import { pratoRoutes } from "./routes/pratoRoutes"
import { dataSource } from "./models/appDataSource"

const app: Express = express();

const PORT: number = parseInt(String(process.env.PORT));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(pratoRoutes);

dataSource.initialize()
.then(() => {
    console.log("DB initializated!");
    app.listen(PORT, () => {
        console.log(`Server running on localhost:${PORT}`)
    });
})
.catch((err) => {
    throw new Error(err);
});