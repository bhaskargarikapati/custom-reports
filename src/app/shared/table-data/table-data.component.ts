import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { ApiTableData } from '../apidata';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})

export class TableDataComponent implements OnInit{

  tableData: ApiTableData[] = [];
  // columns we will show on the table
  public displayedColumns = ['application', 'apiName', 'total', 'avg', 'failed', 'success' ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<ApiTableData>();

  @ViewChild(MatSort) sort: MatSort = new MatSort();;

  //dependency injection
  constructor(private apiService: ApiService) {
  }

  ngOnInit(){
    //call this method on component load
    this.getApplicationInformation();
  }

  ngAfterViewInit() {    
    this.dataSource.sort = this.sort;
}
  /**
   * This method returns Component details
   */
  getApplicationInformation(){
    this.apiService.getApplicationInformation()
      .subscribe((res)=>{
        this.dataSource.data = res;
      })
  }
}
