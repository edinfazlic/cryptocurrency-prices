import {Component} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  fiatCurrencies: string[] = ['USD', 'EUR', 'CNY'];
  fiatCurrency: string;
}
