import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {FiatCurrency, getEnumByValue} from '../../model/fiat-currency.enum';
import {ReducerName} from '../../model/reducer-name.enum';
import * as Action from '../../store/cryptocurrency.actions';
import {FiatStateModel} from '../../model/fiat-state.model';

interface AppState {
  [ReducerName.FIAT_CURRENCY_SELECTION]: FiatStateModel;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  fiatCurrencies: string[] = Object.values(FiatCurrency);
  fiatCurrency: string;

  constructor(private store$: Store<AppState>) {
    this.store$.select(ReducerName.FIAT_CURRENCY_SELECTION)
      .subscribe((state: FiatStateModel) => {
        this.fiatCurrency = state.currency;
      });
  }

  canDeactivate() {
    const selectedCurrency: FiatCurrency = getEnumByValue(this.fiatCurrency);
    this.store$.dispatch(new Action.SelectFiatCurrency(selectedCurrency));
    return true;
  }
}
