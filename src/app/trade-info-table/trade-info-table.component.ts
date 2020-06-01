import { Component, OnInit } from '@angular/core';

export interface TradeElement {
  apicalls: string;
  action: string;
  input: string;
  output: string;
}

const TRADE_DATA: TradeElement[] = [
  {apicalls: 'Hydrogen', action: '1.0079', input: 'H',output:'1',},
  {apicalls: 'Helium', action: '4.0026', input: 'He',output:'2'},
  {apicalls: 'Lithium', action: '6.941', input: 'Li',output:'3'},
  {apicalls: 'Beryllium', action: '9.0122', input: 'Be',output:'4'},
  {apicalls: 'Boron', action: '10.811', input: 'B',output:'5'},
  {apicalls: 'Carbon', action: '12.0107', input: 'C',output:'6'},
  {apicalls: 'Nitrogen',action: '14.0067', input: 'N',output:'7'},
  {apicalls: 'Oxygen', action: '15.9994', input: 'O',output:'8'},
  {apicalls: 'Fluorine', action: '18.9984', input: 'F',output:'9'},
  {apicalls: 'Neon', action: '20.1797', input: 'Ne',output:'10'},
];

@Component({
  selector: 'app-trade-info-table',
  templateUrl: './trade-info-table.component.html',
  styleUrls: ['./trade-info-table.component.css']
})

export class TradeInfoTableComponent  {
  displayedColumns: string[] = ['apicalls', 'action', 'input', 'output'];
  dataSource = TRADE_DATA;
  settings={
    actions: {
      add: false,
      delete: false,
      edit:false,
      columnTitle: '', // minimize the actions column size
    },
    columns:{
      apicalls:{
        title: 'API Calls'
      },
      action:{
        title: 'Action'
      },
      input:{
        title: 'Input'
      },
      output:{
        title: 'Output'
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

