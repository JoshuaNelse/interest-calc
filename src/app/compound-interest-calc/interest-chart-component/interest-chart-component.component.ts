import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid, ApexYAxis
} from 'ng-apexcharts';
import {IYear} from '../IYear';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  yAxis: ApexYAxis;
  xAxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-interest-chart-component',
  templateUrl: './interest-chart-component.component.html',
  styleUrls: ['./interest-chart-component.component.css']
})
export class InterestChartComponentComponent implements OnInit, OnChanges {

  constructor() {}

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() yearsOfGrowth: IYear[];
  hasData = false;
  showGraph = true;
  filterYears = (x) => (this.yearsOfGrowth.length <= 20 ? true : x % Math.ceil(this.yearsOfGrowth.length / 20) === 0);
  ngOnChanges(): void {
    this.hasData = this.yearsOfGrowth.length > 0;
    this.chartOptions = {
      series: [
        {
          name: 'Dollars',
          data: this.yearsOfGrowth.filter(y => this.filterYears(y.yearId)).map(y => +y.value.toFixed(0))
        }
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: `Graph of compound Interest over ${this.yearsOfGrowth.length} years`,
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      yAxis: {
        labels : {
          formatter(val: number): string {
            return val.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
          }
        }
      },
      xAxis: {
        title: {
          text: 'Year(s)'
        },
        categories: this.yearsOfGrowth.filter(y => this.filterYears(y.yearId)).map(y => new Date().getFullYear().valueOf() + y.yearId),
      }
    };
    console.log(this.chartOptions);
  }

  ngOnInit(): void {
  }
  toggleShowGraph(): void {
    this.showGraph = !this.showGraph;
  }
}
