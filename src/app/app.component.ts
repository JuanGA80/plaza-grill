import { Component } from '@angular/core';

interface Imagenes {
  id: number;
  imageSrc: string;
}
/*interface Hamburguesas {
  id: number;
  title: string;
  imagen: string;
} */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'plaza-grill';
  data: Imagenes[] = [
    {
      id: 1,
      imageSrc: 'img1.png',
    },
    {
      id: 2,
      imageSrc: 'img2.png',
    },
    {
      id: 3,
      imageSrc: 'img3.png',
    },
    {
      id: 4,
      imageSrc: 'img1.png',
    },
    {
      id: 5,
      imageSrc: 'img2.png',
    },
    {
      id: 6,
      imageSrc: 'img3.png',
    },
    {
      id: 7,
      imageSrc: 'img1.png',
    },
    {
      id: 8,
      imageSrc: 'img2.png',
    },
    {
      id: 9,
      imageSrc: 'img1.png',
    },
  ];

  /*  info: Hamburguesas[] = [
    {
      id: 1,
      title: 'BBQ Especial',
      imagen: 'assets/hamburguesa.png',
    },
    {
      id: 2,
      title: 'Arrachera',
      imagen: 'assets/hamburguesa.png',
    },
    {
      id: 3,
      title: 'Marisquera',
      imagen: 'assets/hamburguesa.png',
    },
    {
      id: 4,
      title: 'Bacon',
      imagen: 'assets/hamburguesa.png',
    },
    {
      id: 5,
      title: 'Gringa',
      imagen: 'assets/hamburguesa.png',
    },
    {
      id: 6,
      title: 'Gourmet',
      imagen: 'assets/hamburguesa.png',
    },
  ]; */
}
