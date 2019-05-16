import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatListModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';

import {CryptocurrencyDetailsComponent} from './cryptocurrency-details.component';
import {DetailsListItemComponent} from './details-list-item/details-list-item.component';
import {fiatCurrenciesReducer} from '../../store/reducers/fiat-currencies.reducer';
import {ReducerName} from '../../model/reducer-name.enum';

describe('CryptocurrencyDetailsComponent', () => {
  let component: CryptocurrencyDetailsComponent;
  let fixture: ComponentFixture<CryptocurrencyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        StoreModule.forRoot({
          [ReducerName.FIAT_CURRENCY_SELECTION]: fiatCurrenciesReducer
        })
      ],
      declarations: [
        CryptocurrencyDetailsComponent,
        DetailsListItemComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
