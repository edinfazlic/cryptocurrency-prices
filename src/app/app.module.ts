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

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CryptocurrencyListComponent} from './cryptocurrency-list/cryptocurrency-list.component';
import {CryptocurrencyDetailsComponent} from './cryptocurrency-details/cryptocurrency-details.component';
import {DetailsListItemComponent} from './cryptocurrency-details/details-list-item/details-list-item.component';
import {MenuToolbarComponent} from './menu-toolbar/menu-toolbar.component';
import {SettingsComponent} from './settings/settings.component';

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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
