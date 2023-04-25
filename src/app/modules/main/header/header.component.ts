import { Component, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  public searchForm: UntypedFormGroup;
  public currentUser: string;

  constructor() {}

  // logout() {
  //     this.keycloakService.logout();
  // }
}
