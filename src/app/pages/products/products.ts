import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productos, Product1 } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  productos: Product1[] = [];
  productosService = inject(Productos);

  ngOnInit() {
    console.log('✅ Products component cargado');
    this.productos = this.productosService.getProducts();
    console.log('Productos:', this.productos);
  }
}
