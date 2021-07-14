import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
    ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    } else {
      this.authService.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
  }

  findByIdUser(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.usuario.senha = ''
    })
  }

  atualizar() {
    if(this.usuario.senha == '') {
      this.alertas.showAlertDanger("Por favor, não deixe o campo de Senha vazio ao atualizar seus dados!")
    } else {

      this.authService.atualizar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.alertas.showAlertSuccess("Usuária atualizado com sucesso, por favor faça o login novamente!")
        this.router.navigate(['/entrar'])
        environment.token = ''
        environment.nome = ''
        environment.id = 0
        environment.foto = ''
      })

    }

  }

}
