import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-graphess',
  templateUrl: './graphess.component.html',
  styleUrls: ['./graphess.component.css']
})
export class GraphessComponent implements OnInit {
  chartOptions={};

  Highcharts= Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions={

      chart: {
          type: 'item'
      },

      title: {
          text: 'Highcharts item chart'
      },

      subtitle: {
          text: 'Parliament visualization'
      },

      legend: {
          labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
      },

      series: [{
          name: 'Representatives',
          keys: ['name', 'y', 'color', 'label'],
          data: [
              ['The Left', 69, '#BE3075', 'DIE LINKE'],
              ['Social Democratic Party', 153, '#EB001F', 'SPD'],
              ['Alliance 90/The Greens', 67, '#64A12D', 'GRÜNE'],
              ['Free Democratic Party', 80, '#FFED00', 'FDP'],
              ['Christian Democratic Union', 200, '#000000', 'CDU'],
              ['Christian Social Union in Bavaria', 46, '#008AC5', 'CSU'],
              ['Alternative for Germany', 94, '#009EE0', 'AfD']
          ],
          dataLabels: {
              enabled: true,
              format: '{point.label}'
          },

          // Circular options
          center: ['50%', '88%'],
          size: '170%',
          startAngle: -100,
          endAngle: 100
      }],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 600
              },
              chartOptions: {
                  series: [{
                      dataLabels: {
                          distance: -30
                      }
                  }]
              }
          }]
      }
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  },300);


  }

}
