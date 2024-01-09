import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http: HttpClient){}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $('#table1').DataTable
    (
      {
        "columnDefs" :
        [
          {
            "targets" : 2,
            "className" : "text-right",
          }
        ]
      }
    )
    this.getData();
  }
  

  ngOnInit(): void {

  }
  
  getData(): void{
    console.log("getData()");
    var url = "https://openexchangerates.org/api/latest.json?app_id=189f14de734e4d1a8f3aa23a9f2483b6";

    this.http.get(url)
    .subscribe(( data : any ) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US","","USD");
      console.log("USD : " + idr2);
      var row = [ 1, "USD", idr2 ];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US","","SGD");
      console.log("SGD : " + sgd2);
      row = [ 2, "SGD", sgd2 ];
      this._table1.row.add(row);

      var aud = rates.IDR / rates.AUD;
      var aud2 = formatCurrency(aud, "en-US","","AUD");
      console.log("AUD : " + aud2);
      row = [ 3, "AUD", aud2 ];
      this._table1.row.add(row);

      var jep = rates.IDR / rates.JEP;
      var jep2 = formatCurrency(jep, "en-US","","JEP");
      console.log("JEP : " + jep2);
      row = [ 4, "JEP", jep2 ];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US","","BTC");
      console.log("BTC : " + btc2);
      row = [ 5, "BTC", btc2 ];
      this._table1.row.add(row);

      var myr = rates.IDR / rates.MYR;
      var myr2 = formatCurrency(myr, "en-US","","MYR");
      console.log("MYR : " + myr2);
      row = [ 6, "MYR", myr2 ];
      this._table1.row.add(row);

      var yer = rates.IDR / rates.YER;
      var yer2 = formatCurrency(yer, "en-US","","YER");
      console.log("YER : " + yer2);
      row = [ 7, "YER", yer2 ];
      this._table1.row.add(row);

      var etb = rates.IDR / rates.ETB;
      var etb2 = formatCurrency(etb, "en-US","","ETB");
      console.log("ETB : " + etb2);
      row = [ 8, "ETB", etb2 ];
      this._table1.row.add(row);

      var kwd = rates.IDR / rates.KWD;
      var kwd2 = formatCurrency(kwd, "en-US","","KWD");
      console.log("KWD : " + kwd2);
      row = [ 9, "KWD", kwd2 ];
      this._table1.row.add(row);

      var lyd = rates.IDR / rates.LYD;
      var lyd2 = formatCurrency(lyd, "en-US","","LYD");
      console.log("LYD : " + lyd2);
      row = [ 10, "LYD", lyd2 ];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}

