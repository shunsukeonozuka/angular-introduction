import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  title: string;
  message: string;
  styleClass: string;

  constructor() {
    this.title = 'Hello-app';
    this.message = 'This is My First Component!!';
    this.styleClass = 'red';

    setInterval(() => {
      this.styleClass = this.styleClass === 'red' ? '' : 'red';
      console.log(this.styleClass);
    }, 1000);
  }
}
