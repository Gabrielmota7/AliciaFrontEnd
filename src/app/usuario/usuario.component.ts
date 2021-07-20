import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUsuario: Usuario[]

  key = 'nome'
  reverse = true

  constructor(
    private router: Router,
    public authService: AuthService,
    private alertas: AlertasService
    ) { }

  ngOnInit(){
    if(environment.token == '') {
      this.alertas.showAlertInfo("Sessão expirada, por favor faça o login novamente.")
      this.router.navigate(['/entrar'])
    } else {
      this.authService.token = {
        headers: new HttpHeaders().set('Authorization',environment.token)
      }
    }
    window.scroll(0,0)
    this.findAllUsuario()
  }

  findAllUsuario() {
    this.authService.getAllUsuario().subscribe((resp: Usuario[]) => {
      this.listaUsuario = resp
    })
  }

  foto(usuario: Usuario) {
    if(usuario.foto != "") {
      return true
    } else {
      return false
    }
  }

}
