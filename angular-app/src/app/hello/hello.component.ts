import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  title = 'Hello-app';
  message = 'This is My First Component!!';
  input = '';

  constructor() {}

  doType(val: string) {
    this.input = val;
    this.message = 'you type: ' + this.input;
  }
}
