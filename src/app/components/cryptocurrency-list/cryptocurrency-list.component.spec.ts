import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';

import {CryptocurrencyListComponent} from './cryptocurrency-list.component';
import {cryptocurrenciesReducer} from '../../store/reducers/cryptocurrencies.reducer';
import {ReducerName} from '../../model/reducer-name.enum';
import {fiatCurrenciesReducer} from '../../store/reducers/fiat-currencies.reducer';

describe('CryptocurrencyListComponent', () => {
  let component: CryptocurrencyListComponent;
  let fixture: ComponentFixture<CryptocurrencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule,
        RouterTestingModule,
        StoreModule.forRoot({
          [ReducerName.CURRENCIES]: cryptocurrenciesReducer,
          [ReducerName.FIAT_CURRENCY_SELECTION]: fiatCurrenciesReducer
        })
      ],
      declarations: [CryptocurrencyListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
