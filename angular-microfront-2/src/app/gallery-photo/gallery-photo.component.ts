import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalService } from '../shared/providers';

@Component({
  selector: 'app-gallery-photo',
  templateUrl: './gallery-photo.component.html',
  styleUrls: ['./gallery-photo.component.scss'],
})
export class GalleryPhotoComponent {
  posts = [
    {
      likes: 12,
      comments: 0,
      image:
        'https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg',
    },
    {
      likes: 12,
      comments: 100,
      image:
        'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg',
    },
    {
      likes: 100,
      comments: 4,
      image:
        'https://img.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg',
    },
    {
      likes: 4,
      comments: 6,
      image:
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-souvenirpixels-1619317.jpg&fm=jpg',
    },
    {
      likes: 33,
      comments: 10,
      image:
        'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
    },
    {
      likes: 6,
      comments: 44,
      image:
        'https://img.freepik.com/fotos-premium/montana-nevada-nieve-parte-superior_1044943-33651.jpg',
    },
    {
      likes: 6,
      comments: 44,
      image:
        'https://blog.viajesmachupicchu.travel/wp-content/uploads/2024/01/VINICUNCA-819x1024.jpg',
    },
    {
      likes: 6,
      comments: 44,
      image:
        'https://fullday.org/wp-content/uploads/2021/02/Top-de-paisajes-naturales-mas-bellos-del-Peru-1.jpg',
    },
    {
      likes: 6,
      comments: 44,
      image:
        'https://control.urbi.pe/img/Los%20mejores%20paisajes%20naturales%20del%20Per%C3%BA%203.jpg',
    },
  ];

  @ViewChild('view', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  onClickPhoto(view: TemplateRef<Element>, item: any) {
    console.log(item);
    this.modalService.open(this.vcr, view, {
      size: {
        width: '40rem',
      },
      data: {
        item
      }
    });
  }

  onClickClose() {
    this.modalService.close();
  }
}
