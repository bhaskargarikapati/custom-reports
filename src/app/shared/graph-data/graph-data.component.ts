import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from 'src/app/api.service';
import { ApiGraphData } from '../apidata';

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.scss'],
})
export class GraphDataComponent implements OnInit {
  dataLoaded: boolean = false;
  updateFlag: boolean = false;

  Highcharts: typeof Highcharts = Highcharts; // required

  chartOptions: Highcharts.Options = {
    title: {
      text: 'API Response',
    },
    chart: {
      type: 'spline',
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false
  },
  };

  chartOptions1: Highcharts.Options = {
    title: {
      text: 'API Consumption by Applications',
    },
    chart: {
      type: 'column',
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
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
    this.apiService.getGraphInformation().subscribe((res) => {
      this.dataLoaded = true;
      const categories: any = res.map((data: ApiGraphData) => data.hour);

      const seriestotalRequests = res.map(
        (data: ApiGraphData) => data.totalRequests
      );
      const seriesFailedRequests = res.map(
        (data: ApiGraphData) => data.failuredRequests
      );

      this.chartOptions.xAxis = {
        categories: categories,
        crosshair: true,
      };

      this.chartOptions.series = [
        {
          type: 'spline',
          name: 'Total Requests',
          data: seriestotalRequests,
        },
        {
          type: 'spline',
          data: seriesFailedRequests,
          name: 'Failed Requests',
        },
      ];

      this.chartOptions1.series = [
        {
          type: 'column',
          name: 'OOV',
          data: seriestotalRequests,
        },
        {
          type: 'column',
          data: seriesFailedRequests,
          name: 'OXP',
        },
      ];

      this.updateFlag = true;
    });
  }
}
