import {
  ChangeDetectionStrategy,
  Component,
  effect,
  HostListener,
  input,
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
  host: {
    '[attr.disabled]': 'disabled() || null'
  }
})
export class ArcoButtonComponent implements OnChanges {

  disabled = input(false);

  type = input<ArcoButtonType>('default');

  @HostListener("click") onClick() {
    console.log("User Click using Host Listener")
  }

  constructor() {
    effect(() => {
      console.log("effect");
    });
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }
}
