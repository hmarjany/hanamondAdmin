import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-edit-category-cell-renderer',
  templateUrl: './edit-category-cell-renderer.component.html',
  styleUrls: ['./edit-category-cell-renderer.component.scss']
})
export class EditCategoryCellRendererComponent implements INoRowsOverlayAngularComp {

  public params: any;
  public category: any;
  public EnumType: any;
  public value: any;
  id: number;
  constructor(){
    this.id = Math.random();
  }

  @ViewChild('containerCategory', { static: false }) containerCategory: MatSelect;
  
  agInit(params: any): void {
    var enumType = params.colDef.cellRendererParams;
    this.EnumType = enumType;
    this.params = params;
    this.value = this.params.value;
  }

  getValue(): any {
    return this.value;
  }

  isCancelAfterEnd(): boolean {
    return false;
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.containerCategory.focus();
      this.selectFavouriteVegetableBasedOnSelectedIndex();

    });

  }

  private selectFavouriteVegetableBasedOnSelectedIndex() {
    //this.containerCategory._elementRef.nativeElement.click();
  }

}