import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { genericResponse } from 'src/app/shared/model/genericResponse';
import { GenericService } from 'src/app/shared/services/generic.service';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string;
  CurrentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private genServ: GenericService, private router: Router) {
    this.apiUrl = environment.apiUrl;
  }

  get IsLoggedIn(): boolean {
    return this.getCurrentUser() != null;
  }
  setCurrentUser(userData) {
    console.log(userData);
    
    if (userData == null) {
      localStorage.setItem('EncryptedUserData', null);
    } else {
      const secretKey = 'mySecretKey';
      const objectToEncrypt = userData?.email;
      const encryptedObject = CryptoJS.AES.encrypt(
        JSON.stringify(objectToEncrypt),
        secretKey
      ).toString();
      localStorage.setItem('EncryptedUserData', encryptedObject);
    }
    this.CurrentUser$.next(userData?.email);
  }

  getCurrentUser() {
    if (localStorage.getItem('EncryptedUserData') && localStorage.getItem('EncryptedUserData') !=""&& localStorage.getItem('EncryptedUserData') !="null"){
      const secretKey = 'mySecretKey';

      const encryptedData = localStorage.getItem('EncryptedUserData');
      const decryptedData = CryptoJS.AES.decrypt(
        encryptedData,
        secretKey
      ).toString(CryptoJS.enc.Utf8);
      const decryptedObject = JSON.parse(decryptedData);
      return decryptedObject;
    }
  }
  
  getUsertoken() {
    return this.getCurrentUser()?.email;
  }

  login(){
    this.router.navigateByUrl('auth/login');

  }


}
