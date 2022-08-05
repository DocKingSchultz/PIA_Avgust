import { Component, OnInit } from '@angular/core';
import { dataMock, dataMocks } from 'src/models/dataMock';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dataArray = dataMocks
    this.dataMock = this.dataArray[0]
  }
  
  dataArray:Array<dataMock>
  dataMock:dataMock

  someFunction()
  {
    
  }
}
