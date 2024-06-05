import { Component } from '@angular/core';

interface Imagenes {
  id: number;
  imageSrc: string;
}
interface Hamburguesas {
  id: number;
  title: string;
  imgTitle: string;
  picture: string;
  ingredientes: string[];
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
      id: 0,
      title: 'BBQ Especial',
      imgTitle: 'assets/bbq-especial.png',
      picture: 'assets/hamburguesa.png',
      ingredientes: [
        '200 gramos de carne',
        'Jamón',
        'Queso cheddar',
        'Queso Manchego',
        'Tocino',
        'Aderezada cono nuestra salsa BBQ',
      ],
    },
    {
      id: 1,
      title: 'Arrachera',
      imgTitle: 'assets/arrachera.png',
      picture: 'assets/hamburguesa.png',
      ingredientes: [
        '200 gramos de jugosos filetes de Arrachera',
        'Servida con queso manchego',
        'Tocino',
      ],
    },
    {
      id: 2,
      title: 'Bacon Bomb',
      imgTitle: 'assets/bacon.png',
      picture: 'assets/hamburguesa.png',
      ingredientes: [
        '200 gramos de carne de res',
        'Envuelta en tocino',
        'Se sirve con queso manchego',
      ],
    },
    {
      id: 3,
      title: 'Gringa',
      imgTitle: 'assets/gringa.png',
      picture: 'assets/hamburguesa.png',
      ingredientes: [
        '200 gramos de carne de res',
        'Queso Manchego',
        'Queso cheddar',
        'Mermelada de tocino',
        'Cebolla caramelizada',
        'Sazonada con un rico BBQ preparado con Whiskey Jack Daniel´s',
      ],
    },
    {
      id: 4,
      title: 'Marinera',
      imgTitle: 'assets/marinera.png',
      picture: 'assets/hamburguesa.png',
      ingredientes: [
        '100 gramos de camarones salteados a la mantequilla',
        'Cebolla caramelizada',
        '200 gramos de carne',
        'Queso cheddar',
        'Queso Manchego',
        'Tocino',
      ],
    },
    {
      id: 5,
      title: 'Gourmet',
      imgTitle: 'assets/gourmet.png',
      picture: 'assets/hamburguesa.png',
      ingredientes: [
        '200 gramos de carne',
        'Champiñones salteados a la mantequilla',
        'Cebolla caramelizada',
        'Queso cheddar',
        'Queso Manchego',
        'Tocino',
      ],
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
