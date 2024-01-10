describe('Arco CSS Size', () => {
  it("generate", () => {
    let buff = '--size-1: 4px;';
    for (let index = 1; index < 50; index++) {
      buff += '\n' + sizeN(index);
    }
    console.log(buff);
  });
});

function sizeN(index: number) {
  return `--size-${index + 1}: calc(var(--size-1) * ${index + 1});`;
}
