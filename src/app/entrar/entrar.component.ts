import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
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
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token != '') {
      this.alertas.showAlertInfo("Sessão expirada, por favor faça o login novamente.")
      this.router.navigate(['/entrar'])
      environment.token = ''
      environment.nome =  ''
      environment.id = 0
      environment.foto = ''
    }

    if(environment.interface == '') {
      environment.interface = "a";
    }
  }

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.id = this.usuarioLogin.id;
      environment.token = this.usuarioLogin.token;
      environment.nome = this.usuarioLogin.nome;
      environment.foto = this.usuarioLogin.foto;
      environment.tipo = this.usuarioLogin.tipo;

      


      /*Para testes:
        console.log(environment.id)
        console.log(environment.token)
        console.log(environment.nome)
        console.log(environment.foto)
      */

      this.router.navigate(['/postagem'])
    }, erro => {
      if (erro.status == 500) {
        this.alertas.showAlertDanger("Usuário ou senha incorretos")
      }
    })

  }

  sair() {
    this.router.navigate(['/inicio'])
    environment.interface = '';
  }

}
