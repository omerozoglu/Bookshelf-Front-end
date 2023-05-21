import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonType } from '../components/enums/button-type.enum';
import { Color } from '../components/enums/color-enum';

@Directive({
  selector: '[appGButton]',
})
export class GButtonDirective {
  @Input('Type') type: ButtonType = ButtonType.Standard;

  @HostListener('mouseenter') onHover() {
    switch (this.type) {
      case ButtonType.Confirm:
        this.style.backgroundColor = Color.White;
        this.style.color = Color.GreenP;
        break;
      case ButtonType.Deny:
        this.style.backgroundColor = Color.White;
        this.style.color = Color.Red;
        break;
      case ButtonType.WithIcon:
        break;
      default:
        this.style.backgroundColor = Color.White;
        this.style.color = Color.BlueP;
        break;
    }
  }

  @HostListener('mouseleave') onLeave() {
    switch (this.type) {
      case ButtonType.Confirm:
        this.style.backgroundColor = Color.GreenP;
        this.style.color = Color.White;
        break;
      case ButtonType.Deny:
        this.style.backgroundColor = Color.Red;
        this.style.color = Color.White;
        break;
      case ButtonType.WithIcon:
        break;
      default:
        this.style.backgroundColor = Color.BlueP;
        this.style.color = Color.White;
        break;
    }
  }

  style: any;

  constructor(private el: ElementRef) {
    this.style = el.nativeElement.style;
  }

  ngOnInit() {
    switch (this.type) {
      case ButtonType.Confirm:
        this.confirm();
        break;
      case ButtonType.Deny:
        this.deny();
        break;
      case ButtonType.WithIcon:
        this.withIcon();
        break;
      default:
        this.standard();
        break;
    }
  }

  standard() {
    this.setCSSProps(Color.BlueP, '10px');
  }

  confirm() {
    this.setCSSProps(Color.GreenP, '18px');
  }

  deny() {
    this.setCSSProps(Color.Red, '18px');
  }

  withIcon() {
    this.style.backgroundImage = "url('assets/images/plus.png')";
  }

  setCSSProps(color: Color, borderRadius: string) {
    this.style.fontSize = '16px';
    this.style.fontWeight = '500';
    this.style.padding = '10px 15px';
    this.style.borderRadius = borderRadius;
    this.style.color = Color.White;
    this.style.backgroundColor = color;
    this.style.border = 'none';
    this.style.border = '1px solid' + color;
  }
}
