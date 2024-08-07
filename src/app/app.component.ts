import { Component } from '@angular/core';

interface Imagenes {
  id: number;
  imageSrc: string;
}
interface Hamburguesas {
  id: number;
  title: string;
  imgTitle: string;
  foto: string;
  ingredientes: string[];
}
interface Cervezas {
  id: number;
  title: string;
  imgTitle: string;
  picture: string;
  nacionalidad: string;
  bandera: string;
  cantidad: string;
  estilo: string;
  grados: string;
}
interface Alitas {
  id: number;
  title: string;
  imagenAlita: string;
  texto1: string;
  texto2: string;
  texto3: string;
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
      imgTitle: 'assets/h-1.png',
      foto: 'assets/h-1.png',
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
      imgTitle: 'assets/h-2.png',
      foto: 'assets/h-2.png',
      ingredientes: [
        '200 gramos de jugosos filetes de Arrachera',
        'Servida con queso manchego',
        'Tocino',
      ],
    },
    {
      id: 2,
      title: 'Bacon Bomb',
      imgTitle: 'assets/h-3.png',
      foto: 'assets/h-3.png',
      ingredientes: [
        '200 gramos de carne de res',
        'Envuelta en tocino',
        'Se sirve con queso manchego',
      ],
    },
    {
      id: 3,
      title: 'Gringa',
      imgTitle: 'assets/h-4.png',
      foto: 'assets/h-4.png',
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
      imgTitle: 'assets/h-5.png',
      foto: 'assets/h-5.png',
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
      imgTitle: 'assets/h-6.png',
      foto: 'assets/h-6.png',
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
      nacionalidad: 'Inglaterra',
      bandera: 'assets/inglaterra.png',
      cantidad: '440ml',
      estilo: 'Sidra de mora y bayas',
      grados: '4',
    },
    {
      id: 1,
      title: 'Liefmans Fruitesse',
      imgTitle: '',
      picture: 'assets/chela2.png',
      nacionalidad: 'Bélgica',
      bandera: 'assets/belgica.webp',
      cantidad: '250ml',
      estilo: 'Estilo frutal',
      grados: '3.8',
    },
    {
      id: 2,
      title: 'Guinness',
      imgTitle: '',
      picture: 'assets/chela3.png',
      nacionalidad: 'Irlanda',
      bandera: 'assets/irlanda.png',
      cantidad: '440ml',
      estilo: 'Stout',
      grados: '5',
    },
    {
      id: 3,
      title: 'Lagrimas Negras',
      imgTitle: '',
      picture: 'assets/lagrimas-negras.png',
      nacionalidad: 'México',
      bandera: 'assets/mexico.png',
      cantidad: '355ml',
      estilo: 'Stout',
      grados: '10',
    },
    {
      id: 4,
      title: 'Quilmes',
      imgTitle: '',
      picture: 'assets/quilmes.png',
      nacionalidad: 'Argentina',
      bandera: 'assets/argentina.jpg',
      cantidad: '340ml',
      estilo: 'Premium',
      grados: '4.9',
    },
    {
      id: 5,
      title: 'Barista',
      imgTitle: '',
      picture: 'assets/barista.png',
      nacionalidad: 'Bélgica',
      bandera: 'assets/belgica.webp',
      cantidad: '330ml',
      estilo: 'Dark Ale',
      grados: '11',
    },
    {
      id: 6,
      title: 'Frankziskaner',
      imgTitle: '',
      picture: 'assets/franzciscaner.png',
      nacionalidad: 'Alemania',
      bandera: 'assets/alemania.png',
      cantidad: '500ml',
      estilo: 'Estilo Weissbier',
      grados: '5',
    },
    {
      id: 7,
      title: 'Gulden Draak',
      imgTitle: '',
      picture: 'assets/gulden.png',
      nacionalidad: 'Bélgica',
      bandera: 'assets/belgica.webp',
      cantidad: '330ml',
      estilo: 'Dark Ale',
      grados: '10.5',
    },
    {
      id: 8,
      title: 'Old Rasputin',
      imgTitle: '',
      picture: 'assets/old-rasputin.png',
      nacionalidad: 'U.S.A',
      bandera: 'assets/usa.png',
      cantidad: '330ml',
      estilo: 'Imperial Stout',
      grados: '9',
    },
    {
      id: 9,
      title: 'Double Chocolate',
      imgTitle: '',
      picture: 'assets/double-chocolate.png',
      nacionalidad: 'Inglaterra',
      bandera: 'assets/inglaterra.png',
      cantidad: '440ml',
      estilo: 'Estilo Stout',
      grados: '5.2',
    },
    {
      id: 10,
      title: 'Hob Goblin',
      imgTitle: '',
      picture: 'assets/hobgoblin.png',
      nacionalidad: 'Inglaterra',
      bandera: 'assets/inglaterra.png',
      cantidad: '500ml',
      estilo: 'Estilo Dark Ale',
      grados: '5.2',
    },
  ];

  date: Alitas[] = [
    {
      id: 0,
      title: 'Alitas',
      imagenAlita: 'assets/foto-alitas.png',
      texto1: '200 gramos de alitas marinadas',
      texto2: 'Salsa de su preferencia',
      texto3:
        'Nuestras alitas se acompañan con una porción de aderezo ranch o blue cheese',
    },
    {
      id: 1,
      title: 'Bonelees',
      imagenAlita: 'assets/boneles.png',
      texto1: 'Trocitos de pollo empanizados y fritos',
      texto2: 'Bañados en la salsa de su elección',
      texto3:
        'Nuestros boneless se acompañan con una porción de aderezo ranch o blue cheese',
    },
    {
      id: 2,
      title: 'Costillas',
      imagenAlita: 'assets/costillas.png',
      texto1: '500 gramos de jugosas costillas',
      texto2: 'Horneadas en salsa BBQ',
      texto3: 'Acompañadas de un elote dulce y papas a la francesa',
    },
    {
      id: 3,
      title: 'Salsas',
      imagenAlita: 'assets/menu.png',
      texto1: 'Salsas para tus alitas o bonelees',
      texto2: 'BBQ,Blueberry, Tamarindo Hot, Baby Mango, Mango Spicy',
      texto3:
        'Bbq-Chipotle, Bbq-Tabasco, Bbq Habanero, Buffalo, Cajun y Habanero Fuck',
    },
    {
      id: 4,
      title: 'Y mucho más',
      imagenAlita: 'assets/foto-alitas.png',
      texto1: 'Postres: Paya de queso, Pay de limón, Tiramisú de fresa',
      texto2: 'Bebidas: Refresco, Agua Mineral, Limonada, Carajillo',
      texto3: 'Extras: Puré de papa, Orden de tocino, Chiles toreados',
    },
  ];
}
