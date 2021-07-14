import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private alertas: AlertasService,
    private router: Router
    ) { }

  ngOnInit(){
    window.scroll(0,0);
    if(environment.token != '') {
      this.router.navigate(['/inicio'])
      environment.token = ''
      environment.nome =  ''
      environment.id = 0
      environment.foto = ''
      environment.interface = '';
    }
  }

  sumirInterface() {
    environment.interface = "a";
  }

}
