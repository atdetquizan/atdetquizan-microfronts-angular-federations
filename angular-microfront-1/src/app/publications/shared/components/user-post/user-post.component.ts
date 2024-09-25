import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent {
  posts = [
    {
      user: {
        nombre: 'Juan Pérez',
        fotoPerfil: 'https://randomuser.me/api/portraits/women/45.jpg',
        location: 'Edificio Bloom Tower Magdalena',
      },
      image:
        'https://previews.123rf.com/images/imaginariumphoto/imaginariumphoto2308/imaginariumphoto230801065/211800452-un-paisaje-post-apocal%C3%ADptico-que-muestra-a-un-hombre-y-un-perro-parados-en-las-ruinas-de-la-ciudad.jpg',
    },
    {
      user: {
        nombre: 'Juan Pérez',
        fotoPerfil: 'https://randomuser.me/api/portraits/women/35.jpg',
        location: 'Estados Unidos, Nueva York',
      },
      image:
        'https://cdn.pixabay.com/photo/2023/11/20/10/40/vietnam-8400803_640.jpg',
    },
    {
      user: {
        nombre: 'Juan Pérez',
        fotoPerfil: 'https://randomuser.me/api/portraits/women/35.jpg',
        location: 'España, Madrid',
      },
      image:
        'https://www.promptpal.net/_next/image?url=https%3A%2F%2Fpromptpal-prompt-assets.s3.eu-west-3.amazonaws.com%2Fimages%2Fcf193cf0-ea0f-435e-bbe4-006f1f5ca3f8&w=750&q=75',
    },
  ];
}
