import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  title = 'Hello-app';
  message = 'data list.';
  data = ['最初の項目です。', '2番目の項目です。', '最後の項目です。'];

  constructor() {}
}
