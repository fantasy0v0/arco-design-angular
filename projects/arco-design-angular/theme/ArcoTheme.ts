import { Color } from "../color";
import { ThemeMode } from "./ThemeMode";

/**
 * 主题
 */
export interface ArcoTheme {

  mode?: ThemeMode;

  /**
   * 主色
   */
  primaryColor?: Color;

  /**
   * 成功色
   */
  successColor?: Color;

  /**
   * 警示色
   */
  warningColor?: Color;

  /**
   * 错误色
   */
  dangerColor?: Color;

  /**
   * 链接色
   */
  linkColor?: Color;

}
