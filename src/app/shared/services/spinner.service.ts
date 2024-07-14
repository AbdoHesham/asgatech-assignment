import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoad:boolean=false
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoad)

  constructor() {}
  show() {
    this.isLoad=true
    
  }
  hide() {
    this.isLoad=false

  }

  }
