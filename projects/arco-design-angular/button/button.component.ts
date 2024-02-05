import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';

export type ArcoButtonType =
  'default'
  | 'primary'
  | 'secondary'
  | 'dashed'
  | 'text'
  | 'outline';

@Component({
  selector: 'button[arco-button]',
  exportAs: 'arcoButton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcoButtonComponent implements OnChanges {

  @HostBinding('[attr.disabled]')
  @Input() disabled: boolean = false;

  @Input() type: ArcoButtonType = 'default';

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
