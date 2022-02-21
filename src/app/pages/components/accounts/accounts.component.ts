import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
