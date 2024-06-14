import {ChangeDetectionStrategy, Component, inject, Input, input} from '@angular/core';
import {NaRowAlign, NaRowJustify, NaGridRowGutter} from "./type";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NaBreakpoints} from "arco-design-angular/core";

@Component({
  selector: 'na-row',
  exportAs: 'NzRow',
  standalone: true,
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.align-items]': 'align()',
    '[style.justify-content]': 'justify()'
  }
})
export class NaRowComponent {

  /**
   * 竖直对齐方式 ( align-items )
   */
  align = input<NaRowAlign>('start');

  /**
   * 水平对齐方式 (justify-content)
   */
  justify = input<NaRowJustify>('start');

  /**
   * 栅格间隔，单位是px 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。
   */
  gutter = input<NaGridRowGutter>(1);

  private breakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.breakpointObserver.observe([
      NaBreakpoints.sm, NaBreakpoints.xs, NaBreakpoints.md,
      NaBreakpoints.lg, NaBreakpoints.xl, NaBreakpoints.xxl,
      NaBreakpoints.xxxl, NaBreakpoints.subsequent
    ]).subscribe(result => {
      console.log(result);
      if (result.matches) {

      } else {

      }
    });
  }

}
