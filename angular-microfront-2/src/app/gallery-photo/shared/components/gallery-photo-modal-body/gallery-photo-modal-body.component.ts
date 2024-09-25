import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPhotoCommentComponent } from '../gallery-photo-comment';

@Component({
  selector: 'app-gallery-photo-modal-body',
  standalone: true,
  imports: [CommonModule, GalleryPhotoCommentComponent],
  templateUrl: './gallery-photo-modal-body.component.html',
  styleUrls: ['./gallery-photo-modal-body.component.scss']
})
export class GalleryPhotoModalBodyComponent {

}
