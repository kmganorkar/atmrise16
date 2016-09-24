import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {
    constructor(private _http: Http) { }
  
  	atmpin : string;
  	passCode : string;
	
	withdrawFromAtm(atmPin: string, passcode: string) : Observable<boolean>{
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    	 return this._http.get('https://apirise16.azurewebsites.net/api/getPasscode?passcode='+passcode+'&atmpin='+atmPin,{headers: headers})
            .map((response: Response) => <any> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
	}
 
 	
 
}
