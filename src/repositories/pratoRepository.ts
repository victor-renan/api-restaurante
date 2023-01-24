import { dataSource } from "../models/appDataSource";
import { Prato } from "../models/entities/Prato";

export const pratoRepository = dataSource.getRepository(Prato);