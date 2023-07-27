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
    return `${array[1]}, ${array[2]}, ${array[3]}`
  }

  it('print css var', () => {
    const genColor = (dark: boolean = false) => {
      const colorArray = [];
      for (const key of Object.keys(Colors)) {
        const color = Colors[key];
        const gradients = generateColor(color.primary, 'rgb', dark);
        const item = gradients
          .map(gradient => getRgb(gradient))
          .map((rgb, index) => {
            return `--${key}-${index + 1}: ${rgb}`;
          });
        colorArray.push(...item);
      }
      return colorArray;
    }
    const genCSS = (dark: boolean = false) => {
      const colors = genColor(dark);
      let buff = dark ? ':root[arco-theme="dark"] {\n' : ':root {\n';
      for (let color of colors) {
        buff += '  ' + color + ';\n';
      }
      buff += '}';
      return buff;
    }
    console.log(genCSS());
    console.log(genCSS(true));
    expect(true).toBe(true);
  });

  it('123', () => {
    console.log(generateColor('#123456'));
  });
});
