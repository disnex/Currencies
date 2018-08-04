import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Currencies } from './currencies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  cryptoCurrencies: Currencies[];
  public cryptoValue: any;
  public jedanNiz = [2,3,4];

  drugiNiz = [2,3,4];

  moneyCurrencies: Currencies[];
  public moneyValue: any;
  money: any;

  bomba: number;
  cryptos: any;

  public vrijednost: number;

  

  constructor(private _data: DataService) { }

  ngOnInit(){
    this.money = 0;
    this.vrijednost = 1;

    this.cryptoCurrencies = [
      {id: 0, name: 'Bitcoin (BTC)', value: 'BTC'},
      {id: 1, name: 'IOTA (IOT)', value: 'IOT'},
      {id: 2, name: 'Dash (DASH)', value: 'DASH'}
    ];
    this.cryptoValue = "BTC";

    this._data.getPrices(this.cryptoValue)
      .subscribe(res => {
        this.cryptos = res;
        this.jedanNiz[0] = this.cryptos.USD;
        this.jedanNiz[1] = this.cryptos.EUR;
        this.jedanNiz[2] = this.cryptos.AUD;
        console.log(this.jedanNiz);
        this.drugiNiz[0] = this.jedanNiz[0] * this.vrijednost;
        this.drugiNiz[1] = this.jedanNiz[1] * this.vrijednost;
        this.drugiNiz[2] = this.jedanNiz[2] * this.vrijednost;
      });

    /*
    this.moneyCurrencies = [
      {id: 0, name: 'Australian Dollar (AUD)', value: 'AUD'},
      {id: 1, name: 'US Dollar (USD)', value: 'USD'},
      {id: 2, name: 'Euro (EUR)', value: 'EUR'}
    ];
    this.moneyValue = "USD";
    */
  }


  
  promjena(){
    this.drugiNiz[0] = this.jedanNiz[0] * this.vrijednost;
    this.drugiNiz[1] = this.jedanNiz[1] * this.vrijednost;
    this.drugiNiz[2] = this.jedanNiz[2] * this.vrijednost;
  }

  izmjena(){
    this._data.getPrices(this.cryptoValue)
      .subscribe(res => {
        this.cryptos = res;
        this.jedanNiz[0] = this.cryptos.USD;
        this.jedanNiz[1] = this.cryptos.EUR;
        this.jedanNiz[2] = this.cryptos.AUD;
        console.log(this.jedanNiz);
        this.drugiNiz[0] = this.jedanNiz[0] * this.vrijednost;
        this.drugiNiz[1] = this.jedanNiz[1] * this.vrijednost;
        this.drugiNiz[2] = this.jedanNiz[2] * this.vrijednost;
      });
  }
}
