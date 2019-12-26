import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(private route: Router) { }


  go_introduction() {
    this.route.navigate(['introduction']);
  }
  go_map() {
    this.route.navigate(['map']);
  }
}
