import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from 'src/app/api.service';
import { ApiGraphData, dountData } from '../apidata'

@Component({
  selector: 'app-applicationoverview',
  templateUrl: './applicationoverview.component.html',
  styleUrls: ['./applicationoverview.component.scss']
})
export class ApplicationoverviewComponent implements OnInit {

  dataLoaded: boolean = false;
  updateFlag: boolean = false;

  Highcharts: typeof Highcharts = Highcharts; // required

  chartOptions: Highcharts.Options = {
    title: {
      text: 'API Response',
    },
    chart: {
      type: 'pie',
    },

    plotOptions : {
      pie: {
         shadow: false,
         center: ['50%', '50%'],
         size:'45%',
         innerSize: '20%'            
      }
   },
    credits: {
      enabled: false
  },
  };

  //dependency injection
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    //call this method on component load
    this.getGraphInformation();
  }

  /**
   * This method returns Component details
   */
  getGraphInformation() {
    this.apiService.getDonutInformation().subscribe((res) => {
      this.dataLoaded = true;
      const categories: any = res.map((data: dountData) => data.Application);

      const seriestotalRequests = res.map(
        (data: dountData) => data.Total
      );
      const seriesFailedRequests = res.map(
        (data: dountData) => data.Failure
      );

      this.chartOptions.xAxis = {
        categories: categories,
        crosshair: true,
      };

      this.chartOptions.title = {text : res[0].Application };

      this.chartOptions.series = [{
        type: 'pie',
        name: res[0].Application,
        data: [
           ['Failure ', res[0].Failure],
           ['Success',  res[0].Total],          
           
        ]
     }]

      this.updateFlag = true;
    });
  }
}
