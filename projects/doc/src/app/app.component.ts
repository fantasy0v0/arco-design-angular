import {Component} from '@angular/core';
import {Color, Colors} from 'arco-design-angular/color';
import {ArcoThemeService} from 'arco-design-angular/theme';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "arco-design-angular/button";

interface ColorItem {

  name: string;

  color: Color;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ]
})
export class AppComponent {
  title = 'doc';

  colors: ColorItem[] = [];

  light: string[] = [];

  dark: string[] = [];

  constructor(private arcoThemeService: ArcoThemeService) {
    for (let name of Object.keys(Colors)) {
      this.colors.push({
        name, color: Colors[name]
      });
    }
    this.onClick(Colors["red"]);
    console.log(this.arcoThemeService);
  }

  onClick(color: Color) {
    this.light = color.light;
    this.dark = color.dark;
  }

  trackByName(index: number, _: string) {
    return index;
  }
}
