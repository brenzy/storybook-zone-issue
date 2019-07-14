import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'complib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
  @Output() action = new EventEmitter();

  onClick($event) {
    this.action.emit($event);
  }
}
