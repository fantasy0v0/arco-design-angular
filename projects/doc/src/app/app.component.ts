import { Component } from '@angular/core';
import { Color, Colors } from 'arco-design-angular/color';

interface ColorItem {

  name: string;

  color: Color;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doc';

  colors: ColorItem[] = [];

  gradients: string[] = [];

  darkGradients: string[] = [];

  constructor() {
    const _Colors = Colors as { [key: string]: Color };
    for (let name of Object.keys(Colors)) {
      this.colors.push({
        name, color: _Colors[name]
      });
    }
    this.onClick(Colors.Red)
  }

  onClick(color: Color) {
    this.gradients = color.gradients();
    this.darkGradients = color.gradients(true);
  }
}
