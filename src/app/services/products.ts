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
    },
    {
      id: 4,
      nombre: 'Poster JoJo Golden Wind',
      descripcion: 'Póster decorativo con los protagonistas de JoJo’s Bizarre Adventure: Golden Wind.',
      precio: 12.50,
      imagen: 'https://m.media-amazon.com/images/I/91CG9Ndd+IL._AC_SY606_.jpg'
    },
    {
      id: 5,
      nombre: 'Sudadera de Jotaro Kujo',
      descripcion: 'Sudadera negra con estampado del personaje Jotaro Kujo.',
      precio: 39.90,
      imagen: 'https://http2.mlstatic.com/D_Q_NP_993481-CBT90156285573_082025-F.webp'
    },
    {
      id: 6,
      nombre: 'Taza “Pollnareff”',
      descripcion: 'Taza de cerámica con diseño del icónico momento de Dio Brando.',
      precio: 14.75,
      imagen: 'https://http2.mlstatic.com/D_Q_NP_929233-MCO78423618481_082024-F.webp'
    }
  ];

  getProducts(): Product1[] {
    return this.productos;
  }
}
