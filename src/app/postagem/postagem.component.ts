import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]


  constructor(
    private router: Router,
    private postagemService: PostagemService
  ) { }

  ngOnInit(){

    this.postagemService.token = {
      headers: new HttpHeaders().set('Authorization',environment.token)
    }

    this.findAllPostagens()
    
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
    })
  }

  postar(){
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Parabens equipe Alicia o post foi um sucesso!!!')
      this.postagem = new Postagem()
    })
  }

}
