import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {
    private _cardUrl = 'https://callCashWithdrawService';
    constructor(private _http: Http) { }
  
	
	withdrawFromAtm(atmPin: string, passcode: string) : Observable<boolean>{
		
       let body = JSON.stringify({ atmPin, passcode});
		 this._http.post('_cardUrl', body, {headers : {'Content-Type':'application/json'}})
	      .subscribe(
	        response => {
	        	console.log(response.json());
	        },
	        error => {
	          alert(error.text());
	          console.log(error.text());
	        }
	      );
		
	}
 
}
