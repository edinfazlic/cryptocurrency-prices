import {TestBed, async} from '@angular/core/testing';
import {MatToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {MenuToolbarComponent} from './components/menu-toolbar/menu-toolbar.component';
import {fiatCurrenciesReducer} from './reducers/fiat-currencies.reducer';
import {ReducerName} from './model/reducer-name.enum';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        StoreModule.forRoot({
          [ReducerName.FIAT_CURRENCY_SELECTION]: fiatCurrenciesReducer
        })
      ],
      declarations: [
        AppComponent,
        MenuToolbarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
