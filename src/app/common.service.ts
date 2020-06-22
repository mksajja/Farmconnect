import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private category = new BehaviorSubject<string>('');
  cast = this.category.asObservable();
   
  // private _dashboardRouteSource = new Subject<boolean>();
  // routeoption$ = this._dashboardRouteSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    const url = "http://localhost:3000/sellers"

    return this.httpClient.get<any>(url);
  }

  getBuyersData(): Observable<any> {
    const url = "http://localhost:3000/buyers"

    return this.httpClient.get<any>(url);
  }

  search(searchData) {
    const url = "http://localhost:3000/search/1"
   return this.httpClient.put(url, searchData);
  }

  getSearchData(){
    const url = "http://localhost:3000/search"

    return this.httpClient.get<any>(url);
  }

  editSearch(newCategory) {
    this.category.next(newCategory);
    console.log('newCategory',newCategory);
    console.log('categoryCast',this.category);
  }
  getfarmerTable(){
    const url = "http://localhost:3000/farmerTable"
    return this.httpClient.get<any>(url);
  }

  // sendRouteOption(routeoption: boolean){
  //   this._dashboardRouteSource.next(routeoption);
  // }
}
