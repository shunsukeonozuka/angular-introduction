import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  title = 'Hello-app';
  message = 'formControlを使う';
  myControl = new FormControl('ok.');

  constructor() {}

  doClick() {
    this.message = '「' + this.myControl.value + '」と書きましたね。';
  }
}
