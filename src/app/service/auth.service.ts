import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ok: boolean = false;
  okLogado: boolean = false;
  constructor(
    private http:HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("https://projetoalicia.herokuapp.com/usuario/login",usuarioLogin)
  }

  cadastrar(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>("https://projetoalicia.herokuapp.com/usuario/cadastro",usuario)
  }

  logado() {

    if(environment.token != '') {
      this.okLogado = true;
    }

    return this.okLogado;
  }

  interface() {

    if(environment.interface == '') {
      this.ok = true;
    } else {
      this.ok = false;
    }

    return this.ok
  }
}
