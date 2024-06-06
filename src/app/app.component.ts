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
  imgTitle: string;
  picture: string;
}
interface Alitas {
  id: number;
  title: string;
  imagenAlita: string;
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
      id: 0,
      title: 'Stowford Berries',
      imgTitle: '',
      picture: 'assets/chela1.png',
    },
    {
      id: 1,
      title: 'Liefmans Fruitesse',
      imgTitle: '',
      picture: 'assets/chela2.png',
    },
    {
      id: 2,
      title: 'Guinness',
      imgTitle: '',
      picture: 'assets/chela3.png',
    },
    {
      id: 3,
      title: 'Lagrimas Negras',
      imgTitle: '',
      picture: 'assets/chela1.png',
    },
    {
      id: 4,
      title: 'Quilmes',
      imgTitle: '',
      picture: 'assets/chela2.png',
    },
    {
      id: 5,
      title: 'Barista',
      imgTitle: '',
      picture: 'assets/chela3.png',
    },
    {
      id: 6,
      title: 'Frankziskaner',
      imgTitle: '',
      picture: 'assets/chela3.png',
    },
    {
      id: 7,
      title: 'Gulden Daark',
      imgTitle: '',
      picture: 'assets/chela3.png',
    },
    {
      id: 8,
      title: 'Old Rasputin',
      imgTitle: '',
      picture: 'assets/chela3.png',
    },
    {
      id: 9,
      title: 'Double Chocolate',
      imgTitle: '',
      picture: 'assets/chela3.png',
    },
    {
      id: 10,
      title: 'Hob Goblin',
      imgTitle: '',
      picture: 'assets/chela3.png',
    },
  ];

  date: Alitas[] = [
    {
      id: 0,
      title: 'Alita 1',
      imagenAlita: 'assets/foto-alitas.png',
    },
    {
      id: 1,
      title: 'Alita 2',
      imagenAlita: 'assets/foto-alitas.png',
    },
    {
      id: 2,
      title: 'Alita 3',
      imagenAlita: 'assets/foto-alitas.png',
    },
    {
      id: 3,
      title: 'Alita 4',
      imagenAlita: 'assets/foto-alitas.png',
    },
    {
      id: 4,
      title: 'Alita 5',
      imagenAlita: 'assets/foto-alitas.png',
    },
  ];
}
