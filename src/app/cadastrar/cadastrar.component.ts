import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  usuario: Usuario = new Usuario()
  confirmarSenha: string
  tipoUsuario: string


  constructor(
    private authService:AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    if(environment.token != '') {
      this.alertas.showAlertInfo("Sessão expirada, por favor faça o login novamente.")
      this.router.navigate(['/cadastrar'])
      environment.token = ''
      environment.nome =  ''
      environment.id = 0
      environment.foto = ''
    }

    window.scroll(0,0);
    environment.interface = "0";
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  cadastrar() {
    console.log(this.usuario.senha)
    console.log(this.confirmarSenha)
    console.log(this.usuario)
    if(this.usuario.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('Senhas incompatíveis, por favor digite e confirme sua senha novamente')
    } else {
      if(this.usuario.foto == null) {
        this.usuario.foto = "";
      }
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso!')
      })
    }

  }

}
