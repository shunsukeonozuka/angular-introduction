import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  title = 'Hello-app';
  message = 'ngModelを使う';
  text1 = '';

  constructor() {}
}
