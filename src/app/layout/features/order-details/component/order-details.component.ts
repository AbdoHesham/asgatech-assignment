import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../orders/service/order.service';
import { CustomerService } from '../../../../shared/services/customer.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: any;
  customer: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    console.log(orderId);
    
    this.orderService.getOrder(+orderId).subscribe(data => {
      this.order = data;
      this.customerService.getCustomer(this.order.UserId).subscribe(custData => {
        this.customer = custData;
      });
    });
  }
}
