import { ObjectUnsubscribedError } from "rxjs";
import { Color, Colors } from "./Color";
import { ColorGradient } from "./ColorGradient";

describe('Arco Color', () => {
  it('test', () => {
    const red = Colors.Red;
    expect(red.primary()).toEqual('#F53F3F');

    expect(red.light()).toEqual('#F53F3F');
    expect(red.light(ColorGradient.G1)).toEqual('#FFECE8');
    expect(red.light(ColorGradient.G10)).toEqual('#4D000A');

    expect(red.dark()).toEqual('#F76965');
    expect(red.dark(ColorGradient.G1)).toEqual('#4D000A');
    expect(red.dark(ColorGradient.G10)).toEqual('#FFF0EC');
  });

  it('print css var', () => {
    const _Colors = Colors as { [key: string]: Color };
    let buff = '';
    for (let key of Object.keys(_Colors)) {
      const color = _Colors[key];
      const gradients = color.gradients();
      let _buff = '';
      for (const index in gradients) {
        const gradient = gradients[index];
        _buff += `--${color.name()}-${+index + 1}: ${gradient}\n`;
      }
      buff += _buff + '\r\n';
    }
    console.log(buff);
    expect(true).toBe(true);
  });
});
