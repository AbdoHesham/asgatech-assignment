import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genericResponse } from '../model/genericResponse';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Set the API URL using the environment variable
    this.apiUrl = environment.apiUrl;
  }
  getCustom<T>(endpoint: string): Observable<genericResponse<T>> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<genericResponse<T>>(url);
  }
  get<T>(endpoint: string, params?: any): Observable<T> {

    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url, { params: params });
  }

  // POST request
  post<T>(endpoint: string, body: any, headers?): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, body);
  }

  // PUT request
  put<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, body);
  }
    // delete request
    delete(endpoint: string): Observable<any> {
      const url = `${this.apiUrl}/${endpoint}`;
      return this.http.delete<any>(url);
    }
    
  download<ArrayBuffer>(endpoint: string): Observable<ArrayBuffer> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<ArrayBuffer>(url);
  }
}
