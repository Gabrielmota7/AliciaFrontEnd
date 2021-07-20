import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  listaTemas: Tema[]
  tema: Tema = new Tema()
  idTema: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  key = 'dataPostagem'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.alertas.showAlertInfo("Sessão expirada, por favor faça o login novamente.")
      this.router.navigate(['/entrar'])
    } else {
      this.postagemService.token = {
        headers: new HttpHeaders().set('Authorization',environment.token)
      }
      this.temaService.token = {
        headers: new HttpHeaders().set('Authorization',environment.token)
      }
      this.authService.token = {
        headers: new HttpHeaders().set('Authorization',environment.token)
      }
    }
    
    this.findAllTemas()
    this.findAllPostagens()
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  postar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario
    
    console.log(this.postagem)
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      console.log(this.postagem.tema)
      this.postagem = resp
      this.postagem = new Postagem()
      this.findAllTemas()
      this.findAllPostagens()
    })
  }

  imagem(postagem: Postagem){
    if(postagem.midia != null){
      return true
    }else{
      return false
    }

  }

  imagemUsuario(usuario: Usuario){
    if(usuario.foto != null){
      return true
    }else{
      return false
    }

  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=> {
      this.usuario = resp
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



