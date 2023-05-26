import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  title: string;
  message: string;
  now: Date;

  constructor() {
    this.title = 'Hello-app';
    this.message = 'This is My First Component!!';
    this.now = new Date();

    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  today() {
    return this.now.toLocaleString();
  }
}
