import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../../services/shared-information/nav-menu.service';


@Component({
  selector: 'nav-menu',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})

export class AppNavComponent implements OnInit{
    title = 'Orahi Dash Board';
    navLinks: Array<any>;
    constructor(private navMenu: NavMenuService){
    }

    ngOnInit(): void {
        this.getNavMenu();
    }

    getNavMenu(): void {
        this.navMenu.getNavMenu().then(nav => this.navLinks = nav);
    }
}