import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
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

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    } else {
      this.postagemService.token = {
        headers: new HttpHeaders().set('Authorization',environment.token)
      }
      this.temaService.token = {
        headers: new HttpHeaders().set('Authorization',environment.token)
      }
    }
    
    this.findAllPostagens()
    this.findAllTemas()
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
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      console.log(this.postagem.tema)
      this.postagem = resp
      alert('Parabens equipe Alicia o post foi um sucesso!!!')
      this.postagem = new Postagem()
    })
  }

}
