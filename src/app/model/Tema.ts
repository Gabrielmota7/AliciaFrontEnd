import { Postagem } from "./Postagem";

export class Tema {
    public id: number
    public descricao: string;
    public qtdPostagem: number;
    public tendenciaSemana: boolean;
    public postagem: Postagem[];
}