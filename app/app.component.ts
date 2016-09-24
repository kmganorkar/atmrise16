import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features;
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { WelcomeComponent } from './home/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { CardService } from './landing/card.service';
import { CardlessComponent } from './cardless/cardlessLogin.component';

@Component({
    selector: 'atm-app',
    template: `
    <div>
    	<div class='container'>
            <router-outlet></router-outlet>
        </div> 
    </div>
     `,
     directives: [ROUTER_DIRECTIVES],
    providers: [CardService,
    			HTTP_PROVIDERS]     
})
@RouteConfig([
	{ path: '/', redirectTo: ['/Welcome'] },
    { path: '/signup', name: 'Signup', component: SignupComponent },
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/cardless', name: 'Cardless', component: CardlessComponent }
])
export class AppComponent {
   
}
