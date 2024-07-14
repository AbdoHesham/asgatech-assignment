import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'assets/users.json';
  private customersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public customers$: Observable<any[]> = this.customersSubject.asObservable();
  constructor(private http: HttpClient) {
    this.loadcustomers();
  }

  private loadcustomers(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => this.customersSubject.next(data)),
      catchError(error => {
        console.error('Error loading customers:', error);
        return [];
      })
    ).subscribe();
  }

  getcustomers(): Observable<any[]> {
    return this.customers$;
  }


  getCustomer(userId: string): Observable<any> {
    return this.customers$.pipe(
      map(customers => customers.find(o => o.Id === userId)),
      catchError(error => {
        console.error('Error fetching order:', error);
        return [];
      })
    ); 
  }
}
