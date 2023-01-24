import { Router } from "express";
import { criarPrato, obterPratos, obterPrato, atualizarPrato, deletarPrato } from "../controllers/pratoController";

export const pratoRoutes: Router = Router();

pratoRoutes.get("/api/pratos", obterPratos);
pratoRoutes.get("/api/pratos/:id", obterPrato);
pratoRoutes.post("/api/pratos/criar", criarPrato);
pratoRoutes.put("/api/pratos/editar/:id", atualizarPrato);
pratoRoutes.delete("/api/pratos/deletar/:id", deletarPrato);
