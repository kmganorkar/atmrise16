import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Router } from 'angular2/router';


import { CardService } from '../landing/card.service';

@Component({
 	templateUrl: 'app/home/welcome.component.html',
     directives: [ROUTER_DIRECTIVES]
})

export class WelcomeComponent {
     public pageTitle: string = 'Cardless Money';
     userName: string;
     password: string;
     isUserAuthenticated: any;
     errorMessage: string;
    
    constructor(public router: Router,
    private _cardService: CardService) {}
    
    authenticate(): void {
    this.errorMessage="";
	 this._cardService.authenticateUser(this.userName, this.password)
                     .subscribe(
                       isUserAuthenticated => this.isUserAuthenticated = isUserAuthenticated,
                       error =>  this.errorMessage = <any>error);
  	
  	if(this.isUserAuthenticated.success === 'true'){
       this.router.parent.navigateByUrl('/landing?userName='+this.userName);
  	}else{
  		this.errorMessage = 'Invalid User Credentials';	
  	}
       

    }
    
}
