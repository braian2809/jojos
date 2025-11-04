import { Injectable } from '@angular/core';

export interface Products1{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}





@Injectable({
  providedIn: 'root'
})
export class Products {
  
}

