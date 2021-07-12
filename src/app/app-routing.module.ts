import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PostagemComponent } from './postagem/postagem.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';


const routes: Routes = [
  {path: "", redirectTo:"inicio", pathMatch: "full"},
  //Rotas da página de inicio
  {path: "inicio", component: InicioComponent},
  {path: "sobre-nos", component: SobreNosComponent},
  {path: "contato", component: ContatoComponent},
  //Rotas de usuario
  {path: "entrar", component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
  //Rotas de postagem
  {path: "postagem", component: PostagemComponent},
  {path: "postagem-edit/:id", component: PostagemEditComponent},
  {path: "postagem-delete/:id", component: PostagemDeleteComponent},
  //Rotas de tema
  {path: "tema", component: TemaComponent},
  {path: "tema-edit/:id", component: TemaEditComponent},
  {path: "tema-delete/:id", component: TemaDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
