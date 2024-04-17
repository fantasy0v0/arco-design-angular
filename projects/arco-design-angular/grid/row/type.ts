import {NaResponsiveBreakpoint} from "../../core/responsive/type";

export type NaRowAlign = 'start' | 'end' | 'center' | 'stretch';

export type NaRowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

export type NaGridRowGutter =
  | number
  | Partial<Record<NaResponsiveBreakpoint, number>>;
