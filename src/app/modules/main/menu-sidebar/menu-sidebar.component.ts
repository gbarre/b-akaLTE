import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    // public user;
    public menu = MENU;

    constructor() {}

    ngOnInit() {
    }
}

export const MENU = [
    {
        name: 'Dashboard',
        path: ['/'],
        icon: 'fas fa-tachometer-alt'
    },
    {
        name: 'Blank',
        path: ['/blank'],
        icon: 'far fa-circle'
    },
    {
        name: 'Components',
        icon: 'fas fa-gears',
        children: [
            {
                name: 'Accounts',
                path: ['/accounts'],
                icon: 'fas fa-users'
            }
        ]
    }
];
