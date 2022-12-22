import { Color, Colors, generateColor } from "./Color";

describe('Arco Color', () => {
  it('test', () => {
    const red = Colors["red"];
    expect(red.primary).toEqual('#F53F3F');

    expect(red.light[5]).toEqual('#F53F3F');
    expect(red.light[0]).toEqual('#FFECE8');
    expect(red.light[9]).toEqual('#4D000A');

    expect(red.dark[5]).toEqual('#F76965');
    expect(red.dark[0]).toEqual('#4D000A');
    expect(red.dark[9]).toEqual('#FFF0EC');
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
        const gradients = dark ? color.dark : color.light
        let _buff = '';
        if (first) {
          first = false;
        } else {
          _buff += ', ';
        }
        _buff += `"${key}":(`;
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
    console.log(generateColor('#123456'));
  });
});
