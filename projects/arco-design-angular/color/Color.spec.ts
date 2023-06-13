import { Colors, generateColor } from "./Color";

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

  function getRgb(str: string): string {
    let reg = /rgb\((\d+), (\d+), (\d+)\)/;
    const array = reg.exec(str);
    if (null == array || array.length != 4) {
      throw new Error(`参数非法: ${str}`);
    }
    return `(${array[1]}, ${array[2]}, ${array[3]})`
  }

  it('print css var', () => {
    let genColor = (dark: boolean = false) => {
      let buff = '$';
      if (dark) {
        buff += 'dark-colors';
      } else {
        buff += 'light-colors';
      }
      buff += ': (';
      let first = true;
      for (let key of Object.keys(Colors)) {
        const color = Colors[key];
        const gradients = generateColor(color.primary, 'rgb', dark);
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
          _buff += getRgb(gradient);
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
