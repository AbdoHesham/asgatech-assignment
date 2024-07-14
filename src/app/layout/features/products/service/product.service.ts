import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/porducts.json';
  private productsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public products$: Observable<any[]> = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => this.productsSubject.next(data)),
      catchError(error => {
        console.error('Error loading products:', error);
        return [];
      })
    ).subscribe();
  }


  editProductQuantity(productId: number, quantity: number): Observable<any> {
    return this.products$.pipe(
      take(1), // Take one emission of products
      map(products => {
        const productIndex = products.findIndex(p => p.ProductId === productId);
        if (productIndex !== -1) {
          // Update the product's available quantity
          products[productIndex].AvailablePieces = quantity;
          // Update the BehaviorSubject with new products
          this.productsSubject.next([...products]);
          return products[productIndex]; // Return the updated product
        } else {
          throw new Error('Product not found');
        }
      }),
      tap(() => console.log('Product quantity updated successfully')),
      catchError(error => {
        console.error('Error editing product quantity:', error);
        return throwError({ error: 'Product not found' }); // Return an observable error
      })
    );
  }
}
