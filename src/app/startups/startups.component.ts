import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token ==''){
      this.router.navigate(['/entrar'])
    }

/*     this.findAllStartups()
  } */

  /* findAllStartups(){
    this.startupService.getAllStartups().subscribe((resp: Startups[]) => {

    }) */

  }
}

