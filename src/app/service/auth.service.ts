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
  // Métodos de Login e Cadastro
  entrar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("https://projetoalicia.herokuapp.com/usuario/login",usuarioLogin)
  }

  cadastrar(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>("https://projetoalicia.herokuapp.com/usuario/cadastro",usuario)
  }

  //Métodos PUT
  atualizar(usuario: Usuario):Observable<Usuario> {
    return this.http.put<Usuario>("https://projetoalicia.herokuapp.com/usuario/alterar", usuario, this.token)
  }

  //Métodos GET

  getAllUsuario():Observable<Usuario[]> {
    return this.http.get<Usuario[]>("https://projetoalicia.herokuapp.com/usuario", this.token)
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://projetoalicia.herokuapp.com/usuario/${id}`, this.token)
  }

  //Métodos DELETE
  deleteUsuario(id:number) {
    return this.http.delete(`https://projetoalicia.herokuapp.com/usuario/${id}`,this.token)
  }

  // Métodos de controle de exibição
  logado() {
    let ok: boolean = false;

    if(environment.token != '') {
      ok = true;
    } else {
      ok = false;
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

  foto() {
    let ok: boolean = false;

    if(environment.foto != "") {
      ok = true;
    }

    return ok;
  }

}
