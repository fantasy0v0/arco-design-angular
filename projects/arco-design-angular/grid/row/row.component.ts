import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NzRowAlign, NzRowJustify} from "./type";

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
export class RowComponent {

  /**
   * 竖直对齐方式 ( align-items )
   */
  align = input<NzRowAlign>('start');

  /**
   * 水平对齐方式 (justify-content)
   */
  justify = input<NzRowJustify>('start');

  gutter = input();

}
