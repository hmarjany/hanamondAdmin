import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { Category } from 'src/app/model/enum/category';

@Component({
  selector: 'app-edit-category-cell-renderer',
  templateUrl: './edit-category-cell-renderer.component.html',
  styleUrls: ['./edit-category-cell-renderer.component.scss']
})
export class EditCategoryCellRendererComponent  implements INoRowsOverlayAngularComp {

  ngOnInit(): void {

  }
  public params: any;
  public category: any;
  Category: any = Category;

  @ViewChild('dynamicComponent', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  agInit(params: any): void {
    this.params = params;
    this.category = this.params.value;
  }

  getValue(): any {
    return this.category;
  }

  isCancelAfterEnd(): boolean {
    return false;
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      //this.container.element.nativeElement.focus();
    });
  }

  
}