import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from "./card/card.component";
import { ChartComponent } from "./chart/chart.component";
 import { ChartGraphComponent } from './chart-graph/chart-graph.component';
 import { InputSwitchModule } from 'primeng/inputswitch';
 import { InputTextModule } from 'primeng/inputtext';
import { TableComponent } from "./table/table.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [InputTextModule, InputSwitchModule, ButtonModule, CommonModule, RouterOutlet, CardComponent, ChartGraphComponent, ChartComponent, TableComponent]
})
export class AppComponent {
  
  title = 'A_Technologies_test';
}
