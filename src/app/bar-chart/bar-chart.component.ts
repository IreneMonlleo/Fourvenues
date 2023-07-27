import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        max: 400,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: false,
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['23.04', '25.04', '27.04', '29.04', '31.04', '31.04', '02.05' ,'04.05' ,'06.05', '08.05', '10.05', '12.05' , '14.05', '16.05', '18.05', '20.05', '22.05', '24.05', '26.05', '28.05'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40,90,65, 59, 80, 81, 56, 55, 40,90,65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor:'#9d57b7'},
      { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40,90,65, 59, 80, 81, 56, 55, 40], label: 'Series B', backgroundColor:'#d7d7d7' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
  
}
