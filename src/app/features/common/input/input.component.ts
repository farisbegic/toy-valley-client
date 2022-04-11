import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() fields: String[] = [];
  @Input() examples: String[] = [];

  public isPasswordField(field: String): boolean {
    if (field == 'Password' || field == 'Confirm Password') return true;
    return false;
  }
}
