import { Component, OnInit } from '@angular/core';
import { RedComponentComponent } from "../red-component/red-component.component";
import { GridOptions } from "ag-grid-community";
import { EditComponentComponent } from "../edit-component/edit-component.component";
import { EditCategoryCellRendererComponent } from '../edit-category-cell-renderer/edit-category-cell-renderer.component';
import { Category } from 'src/app/model/enum/category';
import { CategoryType } from 'src/app/model/enum/CategoryType';
import { Product } from 'src/app/model/Product';
import { AdditionalInfo } from 'src/app/model/AdditionalInfo';
import { Brand } from 'src/app/model/enum/Brand';
import { SubCategory } from 'src/app/model/enum/SubCategory';
import { UplodFileComponent } from '../uplod-file/uplod-file.component';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { AdditionalInfoComponent } from '../additional-info/additional-info.component';

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
  products: Product[];
  additionalInfo = [{key:'keyTst',value:'valueTst'},{key:'keyTst01',value:'valueTst01'}];
  constructor() {

    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };

    this.products = [
      {
        Name: "test1", Price: 1000, ImagePath: 'assets/carousel-1bg.png', AdditinalInfos:this.additionalInfo
        , Barnd: Brand.Ecco, Category: Category.Food, CategoryType: CategoryType.Shoe, Quantity: 10, Sale
          : true, Sepcification: "بسیار خفن", SpecialOffer: false, SubCategory: SubCategory.Female
      },
    ]
  }
  
  getColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        field: "Category",
        cellRenderer: this.isEditable() ? 'editCategoryCellRenderer' : '',
        cellEditor: 'editCategoryCellRenderer',
        editable: this.isCheck,
        cellRendererParams:Category,
        singleClickEdit:true
      },
      {
        field: "CategoryType",
        cellRenderer: this.isEditable() ? 'editCategoryCellRenderer' : '',
        cellEditor: 'editCategoryCellRenderer',
        editable: this.isCheck,
        cellRendererParams:CategoryType
      },
      {
        field: "SubCategory",
        cellRenderer: this.isEditable() ? 'editCategoryCellRenderer' : '',
        cellEditor: 'editCategoryCellRenderer',
        editable: this.isCheck,
        cellRendererParams:SubCategory
      },
      {
        field: "ImagePath",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'UplodFileComponent',
        editable: this.isCheck

      },
      {
        field: "Name",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck

      },
      {
        field: "Price",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck

      },
      {
        field: "Barnd",
        cellRenderer: this.isEditable() ? 'editCategoryCellRenderer' : '',
        cellEditor: 'editCategoryCellRenderer',
        editable: this.isCheck,
        cellRendererParams:Brand
      },
      {
        field: "Sale",
        cellRenderer: this.isEditable() ? 'CheckBoxComponent' : '',
        cellEditor: 'CheckBoxComponent',
        editable: this.isCheck

      },
      {
        field: "SpecialOffer",
        cellRenderer: this.isEditable() ? 'CheckBoxComponent' : '',
        cellEditor: 'CheckBoxComponent',
        editable: this.isCheck

      },
      {
        field: "Sepcification",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck

      },
      {
        field: "AdditinalInfos",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'AdditionalInfoComponent',
        editable: this.isCheck

      },
      {
        field: "Quantity",
        cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
        cellEditor: 'editCellRenderer',
        editable: this.isCheck
      }
      // },
      // {
      //   headerName: "Value2",
      //   field: "value2",
      //   cellRenderer: this.isEditable() ? 'redCellRenderer' : '',
      //   cellEditor: 'editCellRenderer',
      //   width: 100,
      //   editable: this.isCheck,
      //   valueSetter: function test2(params) {
      //     console.log(params);
      //     if (params.newValue != parseInt(params.oldValue)) {
      //       params.data.value2 = parseInt(params.newValue) * 2;
      //       console.log('ValueSetter', parseInt(params.newValue) * 2)
      //     } else {
      //       params.data.value2 = params.data.value2;
      //     }
      //     return true;
      //   },
      //   cellRendererParams: function (params) {
      //     return { validationMsg: 'Hello World' + params.value };
      //   },
      // },

      // {
      //   headerName: "Diff",
      //   width: 100,
      //   valueGetter: function aPlusBValueGetter(params) {
      //     if (params.data.value2 && params.data.value) {
      //       return parseInt(params.data.value2) - parseInt(params.data.value);
      //     }

      //   },
      //   editable: false
      // },


    ];
  }

  defaultColumnDefs() {
    if (this.isCheck) {
      this.gridOptions.defaultColDef = {
        resizable:true,
        flex:1,
        minWidth:220,
        editable: function (params) {
          return (
            true
          );
        },
      }
    } else {
      this.gridOptions.defaultColDef = {
        resizable:true,
        flex:1,
        minWidth:220,
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
      editCategoryCellRenderer: EditCategoryCellRendererComponent,
      UplodFileComponent: UplodFileComponent,
      CheckBoxComponent: CheckBoxComponent,
      AdditionalInfoComponent:AdditionalInfoComponent
    }
    this.gridOptions.rowData = this.products;
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