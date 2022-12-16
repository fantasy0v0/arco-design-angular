import { ObjectUnsubscribedError } from "rxjs";
import { Color, Colors } from "./Color";
import { ColorGradient } from "./ColorGradient";
// @ts-ignore
import { generate } from "@arco-design/color";

describe('Arco Color', () => {
  it('test', () => {
    const red = Colors.Red;
    expect(red.primary).toEqual('#F53F3F');

    expect(red.light()).toEqual('#F53F3F');
    expect(red.light(ColorGradient.G1)).toEqual('#FFECE8');
    expect(red.light(ColorGradient.G10)).toEqual('#4D000A');

    expect(red.dark()).toEqual('#F76965');
    expect(red.dark(ColorGradient.G1)).toEqual('#4D000A');
    expect(red.dark(ColorGradient.G10)).toEqual('#FFF0EC');
  });

  it('print css var', () => {
    let genColor = (dark: boolean = false) => {
      const _Colors = Colors as { [key: string]: Color };
      let buff = '$';
      if (dark) {
        buff += 'dart-colors';
      } else {
        buff += 'colors';
      }
      buff += ': (';
      let first = true;
      for (let key of Object.keys(_Colors)) {
        const color = _Colors[key];
        console.log(color.gradients(true, 'rgb'));
        const gradients = dark ? color.gradients(true) : color.gradients();
        let _buff = '';
        if (first) {
          first = false;
        } else {
          _buff += ', ';
        }
        _buff += `"${color.name}":(`;
        let _first = true;
        for (const index in gradients) {
          if (_first) {
            _first = false;
          } else {
            _buff += ', ';
          }
          const gradient = gradients[index];
          _buff += gradient;
        }
        buff += _buff;
        buff += ')';
      }
      buff += ');';
      return buff;

    }
    let colors = genColor();
    console.log(colors);
    colors = genColor(true);
    console.log(colors);
    expect(true).toBe(true);
  });

  it('123', () => {
    console.log(generate('#123456', {
      format: 'rgb',
      list: true
    }));
  });
});
