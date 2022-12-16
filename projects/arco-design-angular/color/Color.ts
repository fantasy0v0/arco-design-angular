import { ColorGradient } from "./ColorGradient";
// @ts-ignore
import { generate } from "@arco-design/color";

export type ColorFormat = 'hex' | 'rgb' | 'hsl';

export interface Color {

  readonly name: string;

  readonly primary: string;

  light(gradient?: ColorGradient, format?: ColorFormat): string;

  dark(gradient?: ColorGradient, format?: ColorFormat): string;

  gradients(dark?: boolean, format?: ColorFormat): string[];

}

/**
 * 自定生成的颜色对象
 */
class GeneratedColor implements Color {

  name: string;

  primary: string;

  private _gradients: string[];

  private _darkGradients: string[];

  /**
   * @param name 颜色的名称
   * @param value 颜色 hex值
   */
  constructor(name: string, value: string) {
    this.name = name;
    this.primary = value;
    this._gradients = generate(value, { dark: false, list: true }) as string[];
    this._darkGradients = generate(value, { dark: true, list: true }) as string[];
  }

  light(gradient: ColorGradient = ColorGradient.G6, format: ColorFormat = 'hex') {
    return this._format(false, gradient, format);
  }

  dark(gradient: ColorGradient = ColorGradient.G6, format: ColorFormat = 'hex') {
    return this._format(true, gradient, format);
  }

  private _format(dark: boolean, gradient: ColorGradient, format: ColorFormat) {
    if ('hex' === format) {
      if (dark) {
        return this._darkGradients[gradient];
      } else {
        return this._gradients[gradient];
      }
    }
    return generate(this.primary, { dark, format, list: false, index: gradient + 1 }) as string;
  }

  gradients(dark: boolean = false, format: ColorFormat = 'hex') {
    if (format === 'hex') {
      return dark ? this._darkGradients : this._gradients;
    }
    return generate(this.primary, { dark, format, list: true }) as string[];
  }

}

/**
 * 自定义颜色值只支持hex
 */
class CustomColor implements Color {

  name: string;

  primary: string;

  constructor(name: string, private _gradients: string[], private _darkGradients: string[]) {
    this.name = name;
    this.primary = _gradients[ColorGradient.G6];
    if (_gradients.length != 10 || _darkGradients.length != 10) {
      throw new Error('CustomColor bad parameter');
    }
  }

  light(gradient: ColorGradient = ColorGradient.G6, format?: ColorFormat) {
    return this._gradients[gradient];
  }

  dark(gradient: ColorGradient = ColorGradient.G6, format?: ColorFormat): string {
    return this._darkGradients[gradient];
  }

  gradients(dark: boolean = false, format?: ColorFormat) {
    return dark ? this._darkGradients : this._gradients;
  }

}

/**
 * 根据指定的颜色值生成颜色对象
 * @param name 颜色的名称
 * @param value 颜色hex值
 * @returns 颜色对象
 */
export function generateColor(name: string, value: string): Color {
  return new GeneratedColor(name, value);
}

/**
 * 自定义颜色对象, 以该方式生成的颜色对象只支持hex
 * @param name 颜色的名称
 * @param gradients 亮色梯度, 格式: hex
 * @param darkGradients 暗色梯度, 格式: hex
 * @returns 颜色对象
 */
export function customColor(name: string, gradients: string[], darkGradients: string[]): Color {
  return new CustomColor(name, gradients, darkGradients);
}

/**
 * TODO 需要修改成复用@arco-design/color中的数据, 而不是自己维护一套
 */
export const Colors = {
  Red: generateColor('red', '#F53F3F'),
  OrangeRed: generateColor('orangeRed', '#F77234'),
  Orange: generateColor('orange', '#FF7D00'),
  Gold: generateColor('gold', '#F7BA1E'),
  Yellow: generateColor('yellow', '#FADC19'),
  Lime: generateColor('lime', '#9FDB1D'),
  Green: generateColor('green', '#00B42A'),
  Cyan: generateColor('cyan', '#14C9C9'),
  Blue: generateColor('blue', '#3491FA'),
  ArcoBlue: generateColor('arcoBlue', '#165DFF'),
  Purple: generateColor('purple', '#722ED1'),
  PinkPurple: generateColor('pinkPurple', '#D91AD9'),
  Magenta: generateColor('magenta', '#F5319D'),
  Gray: customColor('gray', [
    '#f7f8fa',
    '#f2f3f5',
    '#e5e6eb',
    '#c9cdd4',
    '#a9aeb8',
    '#86909c',
    '#6b7785',
    '#4e5969',
    '#272e3b',
    '#1d2129',
  ], [
    '#17171a',
    '#2e2e30',
    '#484849',
    '#5f5f60',
    '#78787a',
    '#929293',
    '#ababac',
    '#c5c5c5',
    '#dfdfdf',
    '#f6f6f6',
  ])
}