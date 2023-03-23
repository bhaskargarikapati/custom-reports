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
        center: ['40%', '40%'],
        size:'50%',
        innerSize: '40%'         
     }
   },
    credits: {
      enabled: false
  },
  };

  chartOptions1: Highcharts.Options = {
    title: {
      text: 'API Response',
    },
    chart: {
      type: 'pie',
    },

    plotOptions : {
      pie: {
         shadow: false,
         center: ['40%', '40%'],
         size:'50%',
         innerSize: '40%'         
      }
   },
    credits: {
      enabled: false
  },
  };

  chartOptions2: Highcharts.Options = {
    title: {
      text: 'API Response',
    },
    chart: {
      type: 'pie',
    },

    plotOptions : {
      pie: {
        shadow: false,
        center: ['40%', '40%'],
        size:'50%',
        innerSize: '40%'         
     }
   },
    credits: {
      enabled: false
  },
  };

  chartOptions3: Highcharts.Options = {
    title: {
      text: 'API Response',
    },
    chart: {
      type: 'pie',
    },

    plotOptions : {
      pie: {
        shadow: false,
        center: ['40%', '40%'],
        size:'50%',
        innerSize: '40%'         
     }
   },
    credits: {
      enabled: false
  },
  };

  chartOptions4: Highcharts.Options = {
    title: {
      text: 'API Response',
    },
    chart: {
      type: 'pie',
    },

    plotOptions : {
      pie: {
        shadow: false,
        center: ['40%', '40%'],
        size:'50%',
        innerSize: '40%'         
     }
   },
    credits: {
      enabled: false
  },
  };

  chartOptions5: Highcharts.Options = {
    title: {
      text: 'API Response',
    },
    chart: {
      type: 'pie',
    },

    plotOptions : {
      pie: {
        shadow: false,
        center: ['40%', '40%'],
        size:'50%',
        innerSize: '40%'         
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
    const colors = ['#34c38f','#f46a6a'];
    this.apiService.getDonutInformation().subscribe((res) => {
      this.dataLoaded = true;      

      this.chartOptions.title = {text : res[0].Application,floating: true, align: 'center' }; 

      this.chartOptions.series = [{
        type: 'pie',
        name: res[0].Application,
        data: [
           ['Failure ', res[0].Failure,],
           ['Success',  res[0].Total],           
        ],
        colors: [colors[1],colors[0]]
     }];

     this.chartOptions1.title = {text : res[1].Application, floating: true, align: 'center' };

      this.chartOptions1.series = [{
        type: 'pie',
        name: res[0].Application,
        data: [
           ['Failure', res[1].Failure],
           ['Success',  res[1].Total],           
        ],
        colors: [colors[1],colors[0]]

     }]


     this.chartOptions2.title = {text : res[2].Application ,floating: true, align: 'center' };

      this.chartOptions2.series = [{
        type: 'pie',
        name: res[0].Application,
        data: [
           ['Failure ', res[2].Failure],
           ['Success',  res[2].Total],           
        ],
        colors: [colors[1],colors[0]]
     }];

     this.chartOptions3.title = {text : res[3].Application ,floating: true, align: 'center' };

      this.chartOptions3.series = [{
        type: 'pie',
        name: res[0].Application,
        data: [
           ['Failure ', res[3].Failure],
           ['Success',  res[3].Total],           
        ],
        colors: [colors[1],colors[0]]
     }]

     this.chartOptions4.title = {text : res[4].Application ,floating: true, align: 'center' };

      this.chartOptions4.series = [{
        type: 'pie',
        name: res[0].Application,
        data: [
           ['Failure ', res[4].Failure],
           ['Success',  res[4].Total],           
        ],
        colors: [colors[1],colors[0]]
     }]

     this.chartOptions5.title = {text : res[5].Application ,floating: true, align: 'center' };

      this.chartOptions5.series = [{
        type: 'pie',
        name: res[0].Application,
        data: [
           ['Failure ', res[5].Failure],
           ['Success',  res[5].Total],           
        ],
        colors: [colors[1],colors[0]]
     }]

      this.updateFlag = true;
    });
  }
}
