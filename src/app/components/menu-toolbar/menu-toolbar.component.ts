import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {ReducerName} from '../../model/reducer-name.enum';
import {FiatStateModel} from '../../model/fiat-state.model';
import {Route} from '../../model/route.enum';
import {Cryptocurrency} from '../../model/cryptocurrency.model';

interface AppState {
  [ReducerName.FIAT_CURRENCY_SELECTION]: FiatStateModel;
  [ReducerName.SELECTION]: Cryptocurrency;
}

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuToolbarComponent {

  fiatState$: Observable<FiatStateModel>;
  selectedCryptocurrency$: Observable<Cryptocurrency>;
  currentRoute$: Observable<string>;
  Route: typeof Route = Route;

  constructor(private store$: Store<AppState>,
              private router: Router) {
    this.fiatState$ = this.store$.select(ReducerName.FIAT_CURRENCY_SELECTION);
    this.selectedCryptocurrency$ = this.store$.select(ReducerName.SELECTION);
    this.currentRoute$ = router.events.pipe(
      filter(event => event instanceof NavigationStart),
      map((event: NavigationStart) => event.url));
  }

}
