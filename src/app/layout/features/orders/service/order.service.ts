import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'assets/orders.json';
  private ordersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public orders$: Observable<any[]> = this.ordersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadOrders();
  }

  private loadOrders(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => this.ordersSubject.next(data)),
      catchError(error => {
        console.error('Error loading orders:', error);
        return [];
      })
    ).subscribe();
  }

  getOrders(): Observable<any[]> {
    return this.orders$;
  }

  getOrder(orderId: number): Observable<any> {
    return this.orders$.pipe(
      map(orders => orders.find(o => o.OrderId === orderId)),
      catchError(error => {
        console.error('Error fetching order:', error);
        return [];
      })
    );
  }

  addOrder(order: any): Observable<any> {
    const newOrderId = this.ordersSubject.value.length ? Math.max(...this.ordersSubject.value.map(o => o.OrderId)) + 1 : 1;
    const newOrder = { ...order, OrderId: newOrderId };
    this.ordersSubject.next([...this.ordersSubject.value, newOrder]);
    return this.orders$; // Return Observable to be consistent
  }
}
