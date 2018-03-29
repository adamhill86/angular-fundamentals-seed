import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <passenger-viewer></passenger-viewer>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = '';
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy = true;

  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleBlur(event) {
    this.name = event.target.value;
    console.log(event);
  }

  handleInput(event) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'Hill';
  }
}
