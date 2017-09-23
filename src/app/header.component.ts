import { Component, Output, EventEmitter } from '@angular/core';
import { NavTag } from './nav-tag.model';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  @Output() navigation:EventEmitter<NavTag> = new EventEmitter<NavTag>();
  navTag = NavTag;

  onNavClick(tag:NavTag) {
    this.navigation.emit(tag);
  }
}
