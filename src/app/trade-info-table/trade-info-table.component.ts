import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { CommonService } from '../common.service';

export interface TradeElement {
  id: string;
  product: string;
  quantity: string;
  location: string;
}

// const TRADE_DATA: TradeElement[] = [
//   {id: 'Hydrogen', product: '1.0079', quantity: 'H',location:'1',},
//   {id: 'Helium', product: '4.0026', quantity: 'He',location:'2'},
//   {id: 'Lithium', product: '6.941', quantity: 'Li',location:'3'},
//   {id: 'Beryllium', product: '9.0122', quantity: 'Be',location:'4'},
//   {id: 'Boron', product: '10.811', quantity: 'B',location:'5'},
//   {id: 'Carbon', product: '12.0107', quantity: 'C',location:'6'},
//   {id: 'Nitrogen',product: '14.0067', quantity: 'N',location:'7'},
//   {id: 'Oxygen', product: '15.9994', quantity: 'O',location:'8'},
//   {id: 'Fluorine', product: '18.9984', quantity: 'F',location:'9'},
//   {id: 'Neon', product: '20.1797', quantity: 'Ne',location:'10'},
// ];

@Component({
  selector: 'app-trade-info-table',
  templateUrl: './trade-info-table.component.html',
  styleUrls: ['./trade-info-table.component.css']
})

export class TradeInfoTableComponent  {
  displayedColumns: string[] = ['id', 'product', 'quantity', 'location'];
  dataSource: any;
  dataSource1: any;
  sellers = true;
  buyers = false;
  sellersData = [];
 buyersData = [];
  settings={
    actions: {
      add: false,
      delete: false,
      edit:false,
      columnTitle: '', // minimize the products column size
    },
    columns:{
      id:{
        title: 'id'
      },
      product:{
        title: 'Product'
      },
      quantity:{
        title: 'Quantity'
      },
      location:{
        title: 'Location'
      }
    }
  }
  settings1={
    actions: {
      add: false,
      delete: false,
      edit:false,
      columnTitle: '', // minimize the products column size
    },
    columns:{
      id:{
        title: 'id'
      },
      client:{
        title: 'Client'
      },
      requiredQuantity:{
        title: 'Required Quantity'
      },
      location:{
        title: 'Location'
      }
    }
  }
  constructor(private httpClient:HttpClient,
              private commonService:CommonService,
             ) { }

  ngOnInit(): void {
    this.getsellers();
    this.getbuyers();
    this.getSearchData();
  }

  getsellers(){
    this.commonService.getData().subscribe(res =>{
      console.log('res',res);
      console.log('res.product',res[0].product);
      for(let i = 0; i < res.length; i++){
       this.sellersData.push(
          {id: res[i].id, product: res[i].product, quantity: res[i].quantity, location: res[i].location}
           );
      }
      this.dataSource = this.sellersData;
      console.log('sellersData',this.sellersData);
      console.log('dataSource',this.dataSource);
    })
  }

  getbuyers(){
    this.commonService.getBuyersData().subscribe(res =>{
      console.log('res',res);
      console.log('res.client',res[0].client);
      for(let i = 0; i < res.length; i++){
       this.buyersData.push(
          {id: res[i].id, client: res[i].client, requiredQuantity: res[i].requiredQuantity, location: res[i].location}

           );
      }
      this.dataSource1 = this.buyersData;
      console.log('buyersData',this.buyersData);
      console.log('dataSource1',this.dataSource1);
    })
  }

  getSearchData(){
    this.commonService.getSearchData().subscribe(res => {
      console.log('searchData', res);
      console.log('res[res.length-1]',res[res.length-1].category);
      if(res[res.length-1].category == "sell"){
        this.sellers = true;
        this.buyers = false;
      }
      else if(res[res.length-1].category == "buy"){
        this.sellers = false;
        this.buyers = true;
      }
    })
  }
}

