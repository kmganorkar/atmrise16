System.register(['angular2/core', 'angular2-qrcode'], function(exports_1, context_1) {
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
    var core_1, angular2_qrcode_1;
    var QRCodeComponentNew;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_qrcode_1_1) {
                angular2_qrcode_1 = angular2_qrcode_1_1;
            }],
        execute: function() {
            QRCodeComponentNew = (function () {
                function QRCodeComponentNew() {
                }
                QRCodeComponentNew = __decorate([
                    core_1.Component({
                        selector: 'my-qr-code-component',
                        directives: [angular2_qrcode_1.QRCodeComponent],
                        template: "\n  <div><h3>qrcode<h3><div>\n    <div>\n      <qrcode [data]=\"'All QR Code data goes here!'\" [size]=\"150\"></qrcode>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], QRCodeComponentNew);
                return QRCodeComponentNew;
            }());
            exports_1("QRCodeComponentNew", QRCodeComponentNew);
        }
    }
});
//# sourceMappingURL=qrcode.component.js.map