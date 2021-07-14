import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    } else {
      this.authService.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    }
    window.scroll(0,0)
    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
  }

  findByIdUser(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.usuario.senha = ''
    })
  }

  foto(usuario: Usuario) {
    if(usuario.foto != "") {
      return true
    } else {
      return false
    }
  }

  linkedin(usuario: Usuario) {
    if(usuario.linkLinkedin != "" && usuario.linkLinkedin != null) {
      return true
    } else {
      return false
    }
  }

  facebook(usuario: Usuario) {
    if(usuario.linkFacebook != "" && usuario.linkFacebook != null) {
      return true
    } else {
      return false
    }
  }

  instagram(usuario: Usuario) {
    if(usuario.linkInstagram != "" && usuario.linkInstagram != null) {
      return true
    } else {
      return false
    }
  }

  administrador() {
    if(environment.tipo == "adm") {
      return true
    } else {
      return false
    }
  }

  deletar() {
    this.authService.deleteUsuario(this.idUsuario).subscribe(() => {
      alert('Usuaria deletada com sucesso')
      this.router.navigate(['/usuarios'])
    })
  }
}
