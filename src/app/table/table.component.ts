import { Component, OnInit } from '@angular/core';
import { TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { series , icustomer} from "./data";
import { PaginatorModule } from 'primeng/paginator';
import { TruncatePipe } from './truncate.pipe'
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,ButtonModule ,PaginatorModule,TruncatePipe,TooltipModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})


export class TableComponent implements OnInit   {
  customer:icustomer[]=[]
  
  constructor(){}
 

  ngOnInit(): void {
    this.customer=series
   this.getcustomer()
  }

  
  getcustomer(){
    this.customer=series
    
  }

 
}
