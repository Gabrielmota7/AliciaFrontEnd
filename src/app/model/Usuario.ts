import { Postagem } from "./Postagem";

export class Usuario {
    public id: number;
    public nome: string;
    public login: string;
    public senha: string;
    public nomeStartUp: string;
    public foto: string;
    public dataNascimento: string;
    public resumo: string;
    public tipo: string;
    public linkFacebook: string;
    public linkInstagram: string;
    public linkLinkedin: string;
    public postagem: Postagem[] | null;
}