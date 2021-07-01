import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem {
    public id: number;
    public midia: string;
    public texto: string;
    public dataPostagem: Date;
    public curtidas: number;
    public compartilhamentos: number;
    public usuario: Usuario;
    public tema: Tema;
}