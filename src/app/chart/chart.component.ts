import { Component, ViewChild } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ChartGraphComponent } from "../chart-graph/chart-graph.component";
  

 
@Component({
    selector: 'app-chart',
    standalone: true,
    templateUrl: './chart.component.html',
    styleUrl: './chart.component.scss',
    imports: [DropdownModule, ChartGraphComponent]
})
export class ChartComponent {
  cities: any[] = [
    { name: 'سنويا', code: 'NY' },
    { name: 'سنويا', code: 'LA' },
    { name: 'سنويا', code: 'CHI' },
    { name: 'سنويا', code: 'HOU' }
  ];

  selectedCity: any;
 
  constructor() {}


  
  }



