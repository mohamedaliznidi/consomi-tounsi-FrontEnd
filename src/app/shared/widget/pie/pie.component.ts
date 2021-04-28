import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})

export class PieComponent implements OnInit {
  Highcharts = Highcharts;

  public chartOptions: {};
  public data: [];
  constructor() {
    this.chartOptions = {};
    this.data = [];
  }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: null,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Client',
              y: 61.41,
              sliced: true,
              selected: true,
            },
            {
              name: 'Delivery Man',
              y: 11.84,
            },
            {
              name: 'Manager',
              y: 10.85,
            },
            {
              name: 'Client Plus',
              y: 4.67,
            },

            {
              name: 'Admin',
              y: 1.64,
            },
          ],
        },
      ],
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
