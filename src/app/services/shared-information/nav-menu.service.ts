import { Injectable } from '@angular/core';

import { NavMenuModel } from '../../models/nav-menu.model';
import { NavMenu } from '../../app-data/nav-menu.data';

@Injectable()
export class NavMenuService {
  getNavMenu(): Promise<Array<NavMenuModel>> {
    return Promise.resolve(NavMenu);
  }
}