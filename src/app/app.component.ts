import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './service/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment.prod';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alicia';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  nome = environment.nome
  foto = environment.foto

  ngOnInit(): void {
  }

  constructor(public auth: AuthService,private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((resp) => {
      if (resp.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
