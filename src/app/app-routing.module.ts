import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CryptocurrencyListComponent} from './cryptocurrency-list/cryptocurrency-list.component';
import {CryptocurrencyDetailsComponent} from './cryptocurrency-details/cryptocurrency-details.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: 'list', component: CryptocurrencyListComponent},
  {path: 'details/:id', component: CryptocurrencyDetailsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
