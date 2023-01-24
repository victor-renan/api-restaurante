"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pratoRoutes = void 0;
const express_1 = require("express");
const pratoController_1 = require("../controllers/pratoController");
exports.pratoRoutes = (0, express_1.Router)();
exports.pratoRoutes.get("/api/pratos", pratoController_1.obterPratos);
exports.pratoRoutes.get("/api/pratos/:id", pratoController_1.obterPrato);
exports.pratoRoutes.post("/api/pratos/criar", pratoController_1.criarPrato);
exports.pratoRoutes.put("/api/pratos/editar/:id", pratoController_1.atualizarPrato);
exports.pratoRoutes.delete("/api/pratos/deletar/:id", pratoController_1.deletarPrato);
//# sourceMappingURL=pratoRoutes.js.map