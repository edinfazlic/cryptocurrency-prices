import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import {SettingsComponent} from './settings.component';
import {fiatCurrenciesReducer} from '../../store/reducers/fiat-currencies.reducer';
import {ReducerName} from '../../model/reducer-name.enum';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatRadioModule,
        StoreModule.forRoot({
          [ReducerName.FIAT_CURRENCY_SELECTION]: fiatCurrenciesReducer
        })
      ],
      declarations: [SettingsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
