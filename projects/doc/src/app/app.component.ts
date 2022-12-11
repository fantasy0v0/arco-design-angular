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
    this.onClick(Colors.Red);
    this.printCssVar();
  }

  onClick(color: Color) {
    this.gradients = color.gradients();
    this.darkGradients = color.gradients(true);
  }

  printCssVar() {
    const _Colors = Colors as { [key: string]: Color };
    for (let key of Object.keys(_Colors)) {
      const color = _Colors[key];
      const gradients = color.gradients();
      let buff = '';
      for (const index in gradients) {
        const gradient = gradients[index];
        buff += `--${color.name()}-${+index + 1}: ${gradient}\n`;
      }
      console.log(buff);
    }
  }
}
