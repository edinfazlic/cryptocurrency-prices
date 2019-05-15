import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {SettingsComponent} from '../components/settings/settings.component';

@Injectable()
export class DeactivateSettingsGuard implements CanDeactivate<SettingsComponent> {
  constructor() {
  }

  canDeactivate(
    component: SettingsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
}
