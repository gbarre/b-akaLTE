import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  public isOpen: boolean = false;
  @Input() size: string = 'md';
  @HostBinding('class.nav-item') hasNavItem: boolean = true;
  @HostBinding('class.dropdown') hasDropdown: boolean = true;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.dropdownElement.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  constructor(private dropdownElement: ElementRef) {}

  public toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
