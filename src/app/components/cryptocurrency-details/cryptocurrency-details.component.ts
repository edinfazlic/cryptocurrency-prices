import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ReducerName} from '../../model/reducer-name.enum';
import {Cryptocurrency} from '../../model/cryptocurrency.model';

interface AppState {
  [ReducerName.SELECTION]: Cryptocurrency;
}

@Component({
  selector: 'app-cryptocurrency-details',
  templateUrl: './cryptocurrency-details.component.html',
  styleUrls: ['./cryptocurrency-details.component.scss']
})
export class CryptocurrencyDetailsComponent {

  cryptocurrency$: Observable<Cryptocurrency>;

  constructor(private store: Store<AppState>) {
    this.cryptocurrency$ = this.store.select(ReducerName.SELECTION);
  }
}
