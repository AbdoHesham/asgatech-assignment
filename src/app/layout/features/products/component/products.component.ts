import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService]
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  displayEditDialog: boolean = false;
  selectedProduct: any;
  newQuantity: number = 0;

  constructor(private productService: ProductService, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
  }

  highlightLowStock(product: any): boolean {
    return product.AvailablePieces < 5;
  }

  showEditDialog(product: any): void {
    this.selectedProduct = product;
    this.displayEditDialog = true;
  }

  editProductQuantity(productId: number, newQuantity: number): void {
    this.productService.editProductQuantity(productId, newQuantity).subscribe(
      (response) => {
        console.log('Product quantity updated:', response);
        // Optionally, update the UI or perform other actions upon successful update
        this.displayEditDialog = false; // Close the dialog
      },
      (error) => {
        console.error('Error updating product quantity:', error);
      }
    );
  }
}
