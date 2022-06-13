import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public currentUser: object;
  public role: string;

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.keycloakService.loadUserProfile().then(user => {
      this.currentUser = user;
      this.role = user.username.slice(0, -1);
    });
  }

  logout() {
    this.keycloakService.logout();
  }

  formatDate(date) {
    return DateTime.fromISO(date).toFormat('dd LLL yyyy');
  }
}
