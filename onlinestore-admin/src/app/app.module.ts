import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProductComponent } from './component/product/product.component';
import { EditComponentComponent } from './component/edit-component/edit-component.component';
import { RedComponentComponent } from './component/red-component/red-component.component';
import { FormsModule } from '@angular/forms';
import { EditCategoryCellRendererComponent } from './component/edit-category-cell-renderer/edit-category-cell-renderer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { UplodFileComponent } from './component/uplod-file/uplod-file.component';
import { ngfModule } from "angular-file";
import { HttpClientModule } from "@angular/common/http";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EditComponentComponent,
    RedComponentComponent,
    EditCategoryCellRendererComponent,
    UplodFileComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([EditComponentComponent,RedComponentComponent,EditCategoryCellRendererComponent,
      UplodFileComponent, CheckBoxComponent]),
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    ngfModule,
    ButtonsModule.forRoot(),
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
