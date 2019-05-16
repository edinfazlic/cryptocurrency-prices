import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CryptocurrencyListComponent} from './components/cryptocurrency-list/cryptocurrency-list.component';
import {CryptocurrencyDetailsComponent} from './components/cryptocurrency-details/cryptocurrency-details.component';
import {DetailsListItemComponent} from './components/cryptocurrency-details/details-list-item/details-list-item.component';
import {MenuToolbarComponent} from './components/menu-toolbar/menu-toolbar.component';
import {SettingsComponent} from './components/settings/settings.component';

import {CryptocurrencyService} from './service/cryptocurrency.service';
import {DeactivateSettingsGuard} from './shared/deactivateSettings.guard';

import {ReducerName} from './model/reducer-name.enum';
import {cryptocurrenciesReducer} from './store/reducers/cryptocurrencies.reducer';
import {selectionReducer} from './store/reducers/selection.reducer';
import {fiatCurrenciesReducer} from './store/reducers/fiat-currencies.reducer';

import {CryptocurrencyEffects} from './store/effects/cryptocurrencies.effects';
import {ReloadCryptocurrencyEffects} from './store/effects/reload-cryptocurrencies.effects';
import {LoadCryptocurrenciesEffects} from './store/effects/load-cryptocurrencies.effects';
import {ReloadCryptocurrencyDetailEffects} from './store/effects/reload-cryptocurrency-detail.effects';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyListComponent,
    CryptocurrencyDetailsComponent,
    DetailsListItemComponent,
    MenuToolbarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    StoreModule.forRoot({
      [ReducerName.CURRENCIES]: cryptocurrenciesReducer,
      [ReducerName.SELECTION]: selectionReducer,
      [ReducerName.FIAT_CURRENCY_SELECTION]: fiatCurrenciesReducer
    }),
    EffectsModule.forRoot([
      CryptocurrencyEffects,
      ReloadCryptocurrencyEffects,
      LoadCryptocurrenciesEffects,
      ReloadCryptocurrencyDetailEffects
    ])
  ],
  providers: [
    CryptocurrencyService,
    DeactivateSettingsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
