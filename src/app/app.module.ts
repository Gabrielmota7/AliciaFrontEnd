import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { EntrarComponent } from './entrar/entrar.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemComponent } from './postagem/postagem.component';
import { TemaComponent } from './tema/tema.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    ContatoComponent,
    InicioComponent,
    SobreNosComponent,
    CadastrarComponent,
    PostagemComponent,
    TemaComponent,
    MenuLateralComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    UsuarioEditComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    OrderModule
  ],
  providers: [{

    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
