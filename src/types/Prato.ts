import { Prato } from "../models/entities/Prato"

export interface IPrato extends Prato {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    data: Date;
}