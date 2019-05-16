import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatListModule,
  MatPaginatorModule,
  MatRadioModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: []
})
export class AngularMaterialModule {
}
