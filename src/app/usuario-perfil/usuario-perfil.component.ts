import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  listaPostagem: Postagem[]
  key = 'dataPostagem'
  reverse = true

  usuario: Usuario = new Usuario()
  idUsuario: number

  idPostagem: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertas: AlertasService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.alertas.showAlertInfo("Sessão expirada, por favor faça o login novamente.")
      this.router.navigate(['/entrar'])
    } else {
      this.authService.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
      this.postagemService.token = {
        headers: new HttpHeaders().set('Authorization',environment.token)
      }
    }
    window.scroll(0,0)
    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
    this.findAllPostagens()
  }

  findByIdUser(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.usuario.senha = ''
    })
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
    })
  }

  foto(usuario: Usuario) {
    if(usuario.foto != "") {
      return true
    } else {
      return false
    }
  }

  imagem(postagem: Postagem){
    if(postagem.midia != null){
      return true
    }else{
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

  visualizarDeletar() {
    if(this.usuario.id == environment.id || this.administrador()) {
      return true
    } else {
      return false
    }
  }

  postagemDoUsuario(usuarioPostagem: Usuario) {
    if(usuarioPostagem.id == this.usuario.id) {
      return true
    } else {
      return false
    }
  }

  deletar() {
    this.authService.deleteUsuario(this.idUsuario).subscribe(() => {
      this.alertas.showAlertSuccess('Usuaria deletada com sucesso')
      this.router.navigate(['/usuarios'])
    })
  }

  deletarPostagemModal(id: number) {
    this.idPostagem = id
  }

  deletarPostagem() {
    this.postagemService.deletePostagem(this.idPostagem).subscribe(() => {
      this.alertas.showAlertSuccess("Postagem deletada com sucesso")
      this.findAllPostagens()
    })
  }


}
