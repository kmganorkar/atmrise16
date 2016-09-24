import {Component, OnInit} from 'angular2/core';
import {QRCodeComponent} from 'angular2-qrcode';
 
@Component({
  selector: 'my-qr-code-component',
  directives: [QRCodeComponent],
  template: `
  <div><h3>qrcode<h3><div>
    <div>
      <qrcode [data]="'All QR Code data goes here!'" [size]="150"></qrcode>
    </div>
  `
})


export class QRCodeComponentNew {
   
}