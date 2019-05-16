import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';

import {MenuToolbarComponent} from './menu-toolbar.component';
import {fiatCurrenciesReducer} from '../../reducers/fiat-currencies.reducer';
import {ReducerName} from '../../model/reducer-name.enum';

describe('MenuToolbarComponent', () => {
  let component: MenuToolbarComponent;
  let fixture: ComponentFixture<MenuToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        RouterTestingModule,
        StoreModule.forRoot({
          [ReducerName.FIAT_CURRENCY_SELECTION]: fiatCurrenciesReducer
        })
      ],
      declarations: [MenuToolbarComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
