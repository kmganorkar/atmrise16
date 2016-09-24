import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Router } from 'angular2/router';
import { Http, Response, Headers } from 'angular2/http';

import { CardService } from '../landing/card.service';

@Component({
    templateUrl: 'app/cardless/cardlessLogin.component.html',
})

export class CardlessComponent {
    
    constructor(public router: Router,
    private _cardService: CardService,public http: Http) {}
    
    data: any;
    
    submit(atmPin: string, passcode: string): void {
        this._cardService.withdrawFromAtm(atmPin, passcode)
                     .subscribe(
                       data => this.data = data,
                       error =>  this.errorMessage = <any>error);
       
      console.log(body);
    }
    
   
}
