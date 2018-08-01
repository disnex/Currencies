import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result: any;
  _url: string;

  constructor(private _http: HttpClient) { }


  getPrices(crypto, money){
    this._url = 'https://min-api.cryptocompare.com/data/price?fsym='+crypto+'&tsyms='+money;
    return this._http.get(this._url).pipe(map(result => this.result = result));
    //return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms='+crypto+'&tsyms='+money").pipe(map(result => this.result = result));
  }
}
