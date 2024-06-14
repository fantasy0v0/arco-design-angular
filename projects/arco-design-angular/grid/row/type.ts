import {NaBreakpoints} from "arco-design-angular/core";

export type NaRowAlign = 'start' | 'end' | 'center' | 'stretch';

export type NaRowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

export type NaGridRowGutter =
  | number
  | Partial<Record<keyof typeof NaBreakpoints, number>>;
