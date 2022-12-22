// @ts-ignore
import { generate, getPresetColors } from "@arco-design/color";

export type ColorFormat = 'hex' | 'rgb' | 'hsl';

export interface Color {

  readonly primary: string;

  readonly light: string[];

  readonly dark: string[];
}

export const Colors = getPresetColors() as { [key: string]: Color };

/**
 * 生成颜色值
 * @param color 主要颜色的16进制值, 样例: #F53F3F
 * @param format 颜色值格式
 * @param dark 暗黑主题
 * @returns 1-10颜色值表
 */
export function generateColor(color: string, format: ColorFormat = 'hex', dark = false): string[] {
  return generate(color, {
    format, list: true, dark
  });
}