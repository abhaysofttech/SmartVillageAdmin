import { Component, OnInit,Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import 'ag-grid-enterprise';
// import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';


interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: 'app-track-mapping',
  templateUrl: './track-mapping.component.html',
  styleUrls: ['./track-mapping.component.css','./track-mapping.component.scss']
})
export class TrackMappingComponent  {
  customColumn = 'name';
  defaultColumns = [ 'size', 'kind', 'items' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  //dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  //sortDirection: NbSortDirection = NbSortDirection.NONE;


  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private autoGroupColumnDef;
  private rowData:[];
  constructor(private http: HttpClient) {}

  

}
