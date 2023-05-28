import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  title = 'Hello-app';
  message = 'select menu:';
  switch = 'one';

  constructor() {}

  doSelect(val: string) {
    this.switch = val;
  }
}
