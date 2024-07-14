import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-connection-lost',
  templateUrl: './connection-lost.component.html',
  styleUrls: ['./connection-lost.component.scss']
})
export class ConnectionLostComponent {
  constructor( @Inject(DOCUMENT) public document: Document  ) {
    
  }
  Refresh  (){
    window.location.reload();
  }
}
