import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment.prod';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {


  nome = environment.nome
  id = environment.id
  
  foto = environment.foto
  hamburger: Element | null
  navMenu: Element | null
  navLink: Element | null
  

  /*constructor private observer BreakpointObserver */

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
    ) { }

  ngOnInit(){
    console.log(environment)
    //this.nome = environment.nome
    //this.id = environment.id
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

  sair() {
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome =  ''
    environment.id = 0
    environment.foto = ''

  }

  mobileMenu() {
    this.hamburger = document.querySelector(".hamburger");
    this.navMenu = document.querySelector(".nav-menu");
    if (this.hamburger != null && this.navMenu != null) {
      this.hamburger.classList.toggle("active");
      this.navMenu.classList.toggle("active");
    }
    
    
  }

  closeMenu() {
    this.hamburger = document.querySelector(".hamburger");
    this.navMenu = document.querySelector(".nav-menu");
    if (this.hamburger != null && this.navMenu != null) {
      this.hamburger.classList.remove("active");
      this.navMenu.classList.remove("active");
      window.scroll(0,0)
    }
  }
}
