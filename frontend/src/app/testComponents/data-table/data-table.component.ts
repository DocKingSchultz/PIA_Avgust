import { Component, OnInit } from '@angular/core';
import { dataMock, dataMocks } from 'src/models/dataMock';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dataArray = dataMocks
  }
  
  dataArray:Array<dataMock>

  someFunction()
  {
    
  }
}
