import { Component } from '@angular/core';
import { Color, Colors } from 'arco-design-angular/color';
import { ArcoThemeService } from 'arco-design-angular/theme';

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

  constructor(private arcoThemeService: ArcoThemeService) {
    const _Colors = Colors as { [key: string]: Color };
    for (let name of Object.keys(Colors)) {
      this.colors.push({
        name, color: _Colors[name]
      });
    }
    this.onClick(Colors.Red);
    console.log(this.arcoThemeService);
  }

  onClick(color: Color) {
    this.gradients = color.gradients();
    this.darkGradients = color.gradients(true);
  }

  trackByName(index: number, _: string) {
    return index;
  }
}
