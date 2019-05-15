import {Component} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ReducerName} from '../../model/reducer-name.enum';
import {FiatStateModel} from '../../model/fiat-state.model';
import {filter, map} from 'rxjs/operators';

interface AppState {
  [ReducerName.FIAT_CURRENCY_SELECTION]: FiatStateModel;
}

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})
export class MenuToolbarComponent {

  fiatState$: Observable<FiatStateModel>;
  currentRoute$: Observable<string>;

  constructor(private store$: Store<AppState>,
              private router: Router) {
    this.fiatState$ = this.store$.select(ReducerName.FIAT_CURRENCY_SELECTION);
    this.currentRoute$ = router.events.pipe(
      filter(event => event instanceof NavigationStart),
      map((event: NavigationStart) => event.url));
  }

}
