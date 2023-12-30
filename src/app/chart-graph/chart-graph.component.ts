import { Component, ViewChild } from '@angular/core';
import { series  } from "./data";
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTheme,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  tooltip: ApexTooltip;
  colors: string[];
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
 
  theme: ApexTheme;
};

@Component({
  selector: 'app-chart-graph',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart-graph.component.html',
  styleUrl: './chart-graph.component.scss'
})

 
export class ChartGraphComponent {
  @ViewChild("chart")chart!: ChartComponent;
  public chartOptions: any;
  
  constructor() {
    
    this.chartOptions = {
      colors:['#8A74F9'],
 
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
 
        toolbar: {
          show: true,
          tools: {
            download: false
          }
        },
        type: "area",
        
        height: 174.928,
        zoom: {
          enabled: false
        },
        defaultLocale: 'ar',
        locales: [{
          name: 'ar',
          options: {
            mmonths: ['يناير','فبراير','مارس','إبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
            shortMonths: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            days: ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
            shortDays: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],}}]
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        show: false,
      showAlways: false,
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      },





      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
         
        followCursor: true,
        intersect: false,
        inverseOrder: false,
        custom: function({series, seriesIndex, dataPointIndex, w}:any) {
          return`<div class="arrow_box"> 
          
            <span>${series[seriesIndex][dataPointIndex] }</span> 
            <span>إستخدام</span>
            <p><span><img src="../assets/Growth_Indicator.svg"></span>1.3%</p>
            
            </div>`
        },
        fillSeriesColor: ['#1E1B39'],
         
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
            highlightDataSeries: false,
        },
        x: {
            show: true,
            format: 'dd MMM',
            formatter: undefined,
        },
 
    }












    };
  }
}


