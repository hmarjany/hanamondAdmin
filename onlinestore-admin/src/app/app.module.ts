import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProductComponent } from './component/product/product.component';
import { EditComponentComponent } from './component/edit-component/edit-component.component';
import { RedComponentComponent } from './component/red-component/red-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EditComponentComponent,
    RedComponentComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([EditComponentComponent,RedComponentComponent]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
