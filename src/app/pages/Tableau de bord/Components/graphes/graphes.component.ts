import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-graphes',
  templateUrl: './graphes.component.html',
  styleUrls: ['./graphes.component.css']
})
export class GraphesComponent implements OnInit {
  chartOptions={};
  Highcharts= Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions={




        chart: {
            type: 'column',
        },

        title: {
            text: 'Styling axes and columns'
        },

        yAxis: [{
            className: 'highcharts-color-0',
            title: {
                text: 'Primary axis'
            }
        }, {
            className: 'highcharts-color-1',
            opposite: true,
            title: {
                text: 'Secondary axis'
            }
        }],

        plotOptions: {
            column: {
                borderRadius: 5
            }
        },

        series: [{
            data: [1, 3, 2, 4]
        }, {
            data: [324, 124, 547, 221],
            yAxis: 1
        }]



  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  },300);
  }
}
