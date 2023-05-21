import { Component, Input } from '@angular/core';
import { ButtonType } from '../enums/button-type.enum';
import { Color } from '../enums/color-enum';

@Component({
  selector: '[app-g-button]',
  templateUrl: './g-button.component.html',
  styleUrls: ['./g-button.component.scss'],
})
export class GButtonComponent {
  @Input('Type') type: ButtonType = ButtonType.Standard;
  @Input('Value') value: string = 'Button value';
  @Input('Icon') icon: string = 'src\favicon.ico';
  @Input('BackgroundColor') backgroundColor: Color = Color.BlueP;
  @Input('BorderColor') borderColor: Color = Color.BlueP;
  @Input() click: (args?: any) => void = () => {
    alert('Click callback function');
  };

  constructor() {}
}
