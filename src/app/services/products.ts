import { Injectable } from '@angular/core';

export interface Product1 {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private productos: Product1[] = [
    {
      id: 1,
      nombre: 'Camiseta JoJo’s Bizarre Adventure',
      descripcion: 'Diseño inspirado en Jotaro Kujo.',
      precio: 26.60,
      imagen: 'https://i.etsystatic.com/56637758/r/il/47454c/6722960010/il_794xN.6722960010_84ez.jpg'
    },
    {
      id: 2,
      nombre: 'Figura de Dio Brando',
      descripcion: 'Figura coleccionable de Dio Brando.',
      precio: 3.36,
      imagen: 'https://i.etsystatic.com/62544437/r/il/c04f89/7288410050/il_794xN.7288410050_t64x.jpg'
    },
    {
      id: 3,
      nombre: 'Manga Stone Ocean Vol. 1',
      descripcion: 'Primer volumen del manga JoJo’s Bizarre Adventure: Stone Ocean.',
      precio: 19.99,
      imagen: 'https://i.etsystatic.com/53580000/r/il/f990db/6565282459/il_794xN.6565282459_d90o.jpg'
    }
  ];

  getProducts(): Product1[] {
    return this.productos;
  }
}
