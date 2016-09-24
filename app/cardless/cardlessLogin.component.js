System.register(['angular2/core', 'angular2/router', 'angular2/http', '../landing/card.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, card_service_1;
    var CardlessComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            CardlessComponent = (function () {
                function CardlessComponent(router, _cardService, http) {
                    this.router = router;
                    this._cardService = _cardService;
                    this.http = http;
                }
                CardlessComponent.prototype.submit = function (atmPin, passcode) {
                    var _this = this;
                    this._cardService.withdrawFromAtm(atmPin, passcode)
                        .subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
                    data = this.data;
                    console.log(JSON.stringify(data));
                };
                CardlessComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/cardless/cardlessLogin.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, card_service_1.CardService, http_1.Http])
                ], CardlessComponent);
                return CardlessComponent;
            }());
            exports_1("CardlessComponent", CardlessComponent);
        }
    }
});
//# sourceMappingURL=cardlessLogin.component.js.map