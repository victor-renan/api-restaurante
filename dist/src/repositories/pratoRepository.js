"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pratoRepository = void 0;
const appDataSource_1 = require("../models/appDataSource");
const Prato_1 = require("../models/entities/Prato");
exports.pratoRepository = appDataSource_1.dataSource.getRepository(Prato_1.Prato);
//# sourceMappingURL=pratoRepository.js.map