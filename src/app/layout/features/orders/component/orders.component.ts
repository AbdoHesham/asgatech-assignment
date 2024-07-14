import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { ProductService } from '../../products/service/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  products: any[] = [];

  constructor(private orderService: OrderService , private productService:ProductService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (orders) => {
        this.orders = orders;
        // Now orders are available for use in your template
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
    this.getProducts()
  }
  getProducts(): void {
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
  }

  calculateTotal(order: any): number {
    return order.Products.reduce(
      (total, product) => total + (product.Quantity * this.getProductPrice(product.ProductId)),
      0
    );
  }
  
  getProductPrice(productId: number): number {
    const product = this.products.find(p => p.ProductId === productId);
    return product ? product.ProductPrice : 0;
  }
}
