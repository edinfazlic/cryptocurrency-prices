import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CryptocurrencyListComponent} from './components/cryptocurrency-list/cryptocurrency-list.component';
import {CryptocurrencyDetailsComponent} from './components/cryptocurrency-details/cryptocurrency-details.component';
import {SettingsComponent} from './components/settings/settings.component';
import {Route} from './model/route.enum';

const routes: Routes = [
  {path: Route.LIST, component: CryptocurrencyListComponent},
  {path: Route.DETAILS, component: CryptocurrencyDetailsComponent},
  {path: Route.SETTINGS, component: SettingsComponent},
  {path: '', redirectTo: Route.LIST, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
