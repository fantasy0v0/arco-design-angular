import { Component } from '@angular/core';
import { Colors, generateColor } from 'arco-design-angular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doc';

  gradients: string[];

  darkGradients: string[];

  constructor() {
    const color = generateColor('#F53F3F');
    this.gradients = color.gradients();
    this.darkGradients = color.gradients(true);
  }
}
