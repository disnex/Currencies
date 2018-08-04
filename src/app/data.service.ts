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


  getPrices(crypto){
    this._url = 'https://min-api.cryptocompare.com/data/price?fsym='+crypto+'&tsyms=USD,EUR,AUD';
    return this._http.get(this._url).pipe(map(result => this.result = result));
    //return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms='+crypto+'&tsyms='+money").pipe(map(result => this.result = result));
  }
}
