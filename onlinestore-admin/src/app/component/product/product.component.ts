import { Component, OnInit } from '@angular/core';
import { RedComponentComponent } from "../red-component/red-component.component";
import { GridOptions } from "ag-grid-community";
import { EditComponentComponent } from "../edit-component/edit-component.component";
import { EditCategoryCellRendererComponent } from '../edit-category-cell-renderer/edit-category-cell-renderer.component';
import { Category } from 'src/app/model/enum/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private gridOptions: GridOptions;
  isEdit = false;
  isCheck = true;
  edit = 'Dont Edit';
  constructor() {

    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };
  }
  setColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        headerName: "ID",
        field: "id",
        width: 100,
        editable: false
      },
      {
        headerName: "Value",
        field: "value",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        width: 100,
        editable: this.isCheck

      },

    ];
    return this.gridOptions.columnDefs;
  }
  getColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        headerName: "ID",
        field: "id",
        width: 100,
        editable: false
      },
      {
        headerName: "Category",
        field: "category",
        cellRenderer: this.isEditable() ? 'editCategoryCellRenderer' : '',
        cellEditor: 'editCategoryCellRenderer',
        width: 100,
        editable: this.isCheck

      },
      {
        headerName: "Value2",
        field: "value2",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        width: 100,
        editable: this.isCheck,
        valueSetter: function test2(params) {
          console.log(params);
          if (params.newValue != parseInt(params.oldValue)) {
            params.data.value2 = parseInt(params.newValue) * 2;
            console.log('ValueSetter', parseInt(params.newValue) * 2)
          } else {
            params.data.value2 = params.data.value2;
          }
          return true;
        },
        cellRendererParams: function (params) {
          return { validationMsg: 'Hello World' + params.value };
        },
      },

      {
        headerName: "Diff",
        width: 100,
        valueGetter: function aPlusBValueGetter(params) {
          if (params.data.value2 && params.data.value) {
            return parseInt(params.data.value2) - parseInt(params.data.value);
          }

        },
        editable: false
      },


    ];
  }

  defaultColumnDefs() {
    if (this.isCheck) {
      this.gridOptions.defaultColDef = {
        width: 100,
        editable: function (params) {
          return (
            true
          );
        },
      }
    } else {
      this.gridOptions.defaultColDef = {
        width: 100,
        editable: function (params) {
          return (
            false
          );
        },
      }
    }

  }

  getGridData() {
    this.defaultColumnDefs();
    this.getColumnDefs();
    this.gridOptions.frameworkComponents = {
      editCellRenderer: EditComponentComponent,
      redCellRenderer: RedComponentComponent,
      editCategoryCellRenderer:EditCategoryCellRendererComponent
    }
    this.gridOptions.rowData = [
      { id: 1, category:Category.Wears, value: '5', value2: '10' },
      { id: 2, value: '6', value2: '20' },
      { id: 3, value: '7', value2: '30' }
    ]
    this.gridOptions.singleClickEdit = true;
  }


  ngOnInit() {
    this.getGridData();
  }

  isEditable() {
    this.isEdit = true;
    return this.isEdit;
  }


  add() {
    const rows = [];
    rows.push({ id: this.gridOptions.api.getDisplayedRowCount() + 1, value: '', value2: '' });
    this.gridOptions.api.updateRowData({ add: rows });
  }

  show() {
    this.isCheck = !this.isCheck;
    this.edit = this.isCheck === true ? 'Edit' : 'Dont Edit';
    const columnDef = this.gridOptions.api.getColumnDef('value');
    columnDef.editable = this.isCheck;
    const columnDef2 = this.gridOptions.api.getColumnDef('value2');
    columnDef2.editable = this.isCheck;
  }


}