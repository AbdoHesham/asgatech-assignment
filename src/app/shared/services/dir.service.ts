import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirService {

  constructor() { }
  dir() {
    let dir = localStorage.getItem('currentLang');
    return dir;
  }
}
