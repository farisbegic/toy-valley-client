import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() placeholder: String = '';
  @Input() value: String = '';
  @Input() type: String = '';
  @Input() field: String = '';
}

