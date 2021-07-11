import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  constructor(
    private http:HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("https://projetoalicia.herokuapp.com/usuario/login",usuarioLogin)
  }

  cadastrar(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>("https://projetoalicia.herokuapp.com/usuario/cadastro",usuario)
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://projetoalicia.herokuapp.com/usuario/${id}`, this.token)
  }

  logado() {
    let ok: boolean = false;

    if(environment.token != '') {
      ok = true;
    }

    return ok;
  }

  interface() {
    let ok: boolean = true;

    if(environment.interface != '') {
      ok = false;
    } else {
      ok = true;
    }

    return ok;
  }

}
