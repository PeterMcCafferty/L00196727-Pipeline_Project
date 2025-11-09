import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  User: string = '';

  getUserInput() {
    const name = window.prompt('Enter your name:');
    if (name) {
      this.User = name;
    }
  }
  

}
