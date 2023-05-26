import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  title: string;
  message: string;
  price: number;

  constructor() {
    this.title = 'Hello-app';
    this.message = 'This is My First Component!!';
    this.price = 123450;
  }
}
