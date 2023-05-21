import { Component } from '@angular/core';
import { ButtonType } from '../../components/enums/button-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  b1: ButtonType = ButtonType.Standard;
  b2: ButtonType = ButtonType.Confirm;
  b3: ButtonType = ButtonType.Deny;
  b4: ButtonType = ButtonType.WithIcon;

  myCallbackFunction = (args?: any): void => {
    alert('test');
  };
}
