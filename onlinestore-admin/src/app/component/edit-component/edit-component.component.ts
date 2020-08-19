import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  OnInit
} from '@angular/core';

import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {

  ngOnInit(): void {

  }
  public params: any;
  public value: any;

  @ViewChild('dynamicComponent', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  agInit(params: any): void {
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
      this.container.element.nativeElement.focus();
    });
  }

  onKeyDown(event): void {
    let key = event.which || event.keyCode;
    if (
      key == 37 || // left
      key == 39
    ) {
      // right
      event.stopPropagation();
    }
  }
}