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

  moneyCurrencies: Currencies[];
  public moneyValue: any;
  money: any;

  bomba: number;
  cryptos: any;

  

  constructor(private _data: DataService) { }

  ngOnInit(){
    this.money = 0;

    this.cryptoCurrencies = [
      {id: 0, name: 'Bitcoin (BTC)', value: 'BTC'},
      {id: 1, name: 'IOTA (IOT)', value: 'IOT'},
      {id: 2, name: 'DASH (Dash)', value: 'DASH'}
    ];
    this.cryptoValue = "BTC";
    
    this.moneyCurrencies = [
      {id: 0, name: 'Australian Dollar (AUD)', value: 'AUD'},
      {id: 1, name: 'US Dollar (USD)', value: 'USD'},
      {id: 2, name: 'Euro (EUR)', value: 'EUR'}
    ];
    this.moneyValue = "USD";
  }

  printSelected(vrijednost){
    this._data.getPrices(this.cryptoValue, this.moneyValue)
      .subscribe(res => {
        this.cryptos = res;
        let mon = this.moneyValue;
        this.money = vrijednost * this.cryptos[this.moneyValue];
      });
    
   //console.log(this.cryptos[this.moneyValue]);
    
  }
  
}
