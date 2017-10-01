import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open:boolean;

  @HostListener('click') onCick() {
    this.open = !this.open;
  }
}
