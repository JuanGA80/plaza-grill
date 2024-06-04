import { Component } from '@angular/core';

interface Imagenes {
  id: number;
  imageSrc: string;
}
interface Hamburguesas {
  id: number;
  title: string;
  picture: string;
}
interface Cervezas {
  id: number;
  title: string;
  picture: string;
}
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

  info: Hamburguesas[] = [
    {
      id: 1,
      title: 'BBQ Especial',
      picture: 'assets/hamburguesa.png',
    },
    {
      id: 2,
      title: 'Arrachera',
      picture: 'assets/hamburguesa.png',
    },
    {
      id: 3,
      title: 'Bacon',
      picture: 'assets/hamburguesa.png',
    },
    {
      id: 4,
      title: 'Gringa',
      picture: 'assets/hamburguesa.png',
    },
    {
      id: 5,
      title: 'Marinera',
      picture: 'assets/hamburguesa.png',
    },
    {
      id: 6,
      title: 'Gourmet',
      picture: 'assets/hamburguesa.png',
    },
  ];

  texto: Cervezas[] = [
    {
      id: 1,
      title: 'Chela 1',
      picture: 'assets/chela1.png',
    },
    {
      id: 2,
      title: 'Chela 2',
      picture: 'assets/chela2.png',
    },
    {
      id: 3,
      title: 'Chela 3',
      picture: 'assets/chela3.png',
    },
    {
      id: 4,
      title: 'Chela 4',
      picture: 'assets/chela1.png',
    },
    {
      id: 5,
      title: 'Chela 5',
      picture: 'assets/chela2.png',
    },
    {
      id: 6,
      title: 'Chela 6',
      picture: 'assets/chela3.png',
    },
  ];
}
