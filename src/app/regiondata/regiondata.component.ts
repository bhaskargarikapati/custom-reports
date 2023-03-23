
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import {MatSort} from '@angular/material/sort';
import { ApiRegionData, ApiTableData } from '../shared/apidata';

@Component({
  selector: 'app-regiondata',
  templateUrl: './regiondata.component.html',
  styleUrls: ['./regiondata.component.scss']
})

export class RegiondataComponent implements OnInit{

  tableData: ApiRegionData[] = [];
  // columns we will show on the table
  public displayedColumns = ['slno', 'functionality', 'apiname', 'emea', 'naa', 'apac' ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<ApiRegionData>();

  @ViewChild(MatSort) sort: MatSort = new MatSort();

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
    this.apiService.getRegionInformation()
      .subscribe((res)=>{
        this.dataSource.data = res;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
