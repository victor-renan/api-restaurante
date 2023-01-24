import { IPrato } from "../types/Prato";
import { pratoRepository } from "../repositories/pratoRepository";
import { query, Request, Response } from "express";
import { json } from "body-parser";

export const criarPrato = async (req: Request, res: Response): Promise<void> => {
    if (req.method === "POST") {
        try {
            const prato: IPrato = pratoRepository.create({
                nome: String(req.query.nome),
                descricao: String(req.query.descricao),
                preco: parseFloat(String(req.query.preco)),
                imagem: String(req.query.imagem)
            });
            await pratoRepository.save(prato);

            res.status(201).send({
                mensagem: "O prato foi criado com sucesso!",
                prato: prato
            });

        } catch (err) {
            res.status(404).send(err);
            console.log(err, query);
        };
    } else {
        res.status(403).send({"error": "Requer o metodo POST"})
    }
};

export const obterPratos = async (req: Request, res: Response): Promise<void> => {
    if (req.method == "GET") {
        try {
            const pratos: IPrato[] = await pratoRepository.find();

            res.status(200).send({
                mensagem: "Consulta feita com sucesso!",
                pratos: pratos
            });
        } catch (err) {
            res.status(404).send({"Error": err});
            console.log(err);
        };
    };
};

export const obterPrato = async (req: Request, res: Response): Promise<void> => {
    if (req.method == "GET") {
        try {
            const prato: IPrato = await pratoRepository.findOneOrFail({ where: {id: parseInt(req.params.id)} });

            res.status(200).send({
                mensagem: "Consulta feita com sucesso!",
                prato: prato
            });

        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        };

    };
};

export const atualizarPrato = async (req: Request, res: Response): Promise<void> => {
    if (req.method == "PUT") {
        try {
            await pratoRepository
            .update(parseInt(req.params.id), {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                imagem: req.body.imagem
            });

            const prato: IPrato = await pratoRepository.findOneOrFail({where: {id: parseInt(req.params.id)}});

            res.status(200).send({
                mensagem: "Consulta feita com sucesso!",
                prato: prato
            });

        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        };
    }
};

export const deletarPrato = async (req: Request, res: Response): Promise<void> => {
    if (req.method == "DELETE") {
        try {
            const prato: IPrato = await pratoRepository.findOneOrFail({where: {id: parseInt(req.params.id)}})

            await pratoRepository.delete({ id: parseInt(req.params.id) });

            res.status(200).send({
                mensagem: "Prato deletado com sucesso!",
                prato: prato
            });

        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        };
    };
};