import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    const url = "http://localhost:3000/sellers"

    return this.httpClient.get<any>(url);
  }

  getBuyersData(): Observable<any> {
    const url = "http://localhost:3000/buyers"

    return this.httpClient.get<any>(url);
  }
}
