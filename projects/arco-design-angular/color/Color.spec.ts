import { Colors } from "./Color";
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
});
