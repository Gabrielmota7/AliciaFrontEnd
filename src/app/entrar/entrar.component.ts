import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {


  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    environment.interface = "0";
  }

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.id = this.usuarioLogin.id;
      environment.token = this.usuarioLogin.token;
      environment.nome = this.usuarioLogin.nome;
      environment.foto = this.usuarioLogin.foto;

      alert("Login com sucesso")

      /*Para testes:
        console.log(environment.id)
        console.log(environment.token)
        console.log(environment.nome)
        console.log(environment.foto)
      */

      this.router.navigate(['/postagem'])
    }, erro => {
      if (erro.status == 500) {
        alert("Usuário ou senha incorretos")
      }
    })

  }

}
