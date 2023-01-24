"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarPrato = exports.atualizarPrato = exports.obterPrato = exports.obterPratos = exports.criarPrato = void 0;
const pratoRepository_1 = require("../repositories/pratoRepository");
const express_1 = require("express");
const criarPrato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method === "POST") {
        try {
            const prato = pratoRepository_1.pratoRepository.create({
                nome: String(req.query.nome),
                descricao: String(req.query.descricao),
                preco: parseFloat(String(req.query.preco)),
                imagem: String(req.query.imagem)
            });
            yield pratoRepository_1.pratoRepository.save(prato);
            res.status(201).send({
                mensagem: "O prato foi criado com sucesso!",
                prato: prato
            });
        }
        catch (err) {
            res.status(404).send(err);
            console.log(err, express_1.query);
        }
        ;
    }
    else {
        res.status(403).send({ "error": "Requer o metodo POST" });
    }
});
exports.criarPrato = criarPrato;
const obterPratos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method == "GET") {
        try {
            const pratos = yield pratoRepository_1.pratoRepository.find();
            res.status(200).send({
                mensagem: "Consulta feita com sucesso!",
                pratos: pratos
            });
        }
        catch (err) {
            res.status(404).send({ "Error": err });
            console.log(err);
        }
        ;
    }
    ;
});
exports.obterPratos = obterPratos;
const obterPrato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method == "GET") {
        try {
            const prato = yield pratoRepository_1.pratoRepository.findOneOrFail({ where: { id: parseInt(req.params.id) } });
            res.status(200).send({
                mensagem: "Consulta feita com sucesso!",
                prato: prato
            });
        }
        catch (err) {
            res.status(404).send(err);
            console.log(err);
        }
        ;
    }
    ;
});
exports.obterPrato = obterPrato;
const atualizarPrato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method == "PUT") {
        try {
            yield pratoRepository_1.pratoRepository
                .update(parseInt(req.params.id), {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                imagem: req.body.imagem
            });
            const prato = yield pratoRepository_1.pratoRepository.findOneOrFail({ where: { id: parseInt(req.params.id) } });
            res.status(200).send({
                mensagem: "Consulta feita com sucesso!",
                prato: prato
            });
        }
        catch (err) {
            res.status(404).send(err);
            console.log(err);
        }
        ;
    }
});
exports.atualizarPrato = atualizarPrato;
const deletarPrato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method == "DELETE") {
        try {
            const prato = yield pratoRepository_1.pratoRepository.findOneOrFail({ where: { id: parseInt(req.params.id) } });
            yield pratoRepository_1.pratoRepository.delete({ id: parseInt(req.params.id) });
            res.status(200).send({
                mensagem: "Prato deletado com sucesso!",
                prato: prato
            });
        }
        catch (err) {
            res.status(404).send(err);
            console.log(err);
        }
        ;
    }
    ;
});
exports.deletarPrato = deletarPrato;
//# sourceMappingURL=pratoController.js.map