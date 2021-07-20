import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {

  constructor(
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if(environment.token ==''){
      this.alertas.showAlertInfo("Sessão expirada, por favor faça o login novamente.")
      this.router.navigate(['/entrar'])
    }

/*     this.findAllStartups()
  } */

  /* findAllStartups(){
    this.startupService.getAllStartups().subscribe((resp: Startups[]) => {

    }) */

  }
}

