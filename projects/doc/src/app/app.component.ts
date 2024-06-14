import {Component, effect, signal} from '@angular/core';
import {Color, Colors} from 'arco-design-angular/color';
import {ArcoThemeService, ArcoTheme} from 'arco-design-angular/theme';
import {CommonModule} from '@angular/common';
import {NaButtonComponent} from "arco-design-angular/button";
import {NaRowComponent} from "arco-design-angular/grid";

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
    NaButtonComponent,
    NaRowComponent
  ]
})
export class AppComponent {
  title = 'doc';

  colors: ColorItem[] = [];

  light: string[] = [];

  dark: string[] = [];

  disabled = signal(false);

  constructor(private arcoThemeService: ArcoThemeService) {
    for (let name of Object.keys(Colors)) {
      this.colors.push({
        name, color: Colors[name]
      });
    }
    this.onClick(Colors["red"]);
    console.log(this.arcoThemeService);
    effect(() => {
      console.log(`disabled: ${this.disabled()}`);
    });
  }

  onClick(color: Color) {
    this.light = color.light;
    this.dark = color.dark;
  }

  test() {
    this.disabled.update(value => !value);
  }
}
