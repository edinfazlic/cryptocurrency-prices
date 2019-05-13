import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CryptocurrencyListComponent} from './cryptocurrency-list/cryptocurrency-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
