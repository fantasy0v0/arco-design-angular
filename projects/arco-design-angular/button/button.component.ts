import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'button[arco-button]',
  exportAs: 'arcoButton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArcoButtonComponent {

  @HostBinding('[attr.disabled]')
  @Input() disabled: boolean = false;

  test() {
    console.log('test');
  }

}
