import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment.prod';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {


  nome:string
  
  foto = environment.foto

  /*constructor private observer BreakpointObserver */

  constructor() { }

  ngOnInit(){
    console.log(environment)
    this.nome = environment.nome
  }

  /* ngAfterViewInit() {
    this.observer.observe(['(max-width: 950px)']).subscribe((resp) => {
      if (resp.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }*/
  /*sidebarCollapse = false barraLateral() {
    this.sidebarCollapse = !this.sidebarCollapse
  } */
}
