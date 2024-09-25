import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPhotoComponent } from './gallery-photo.component';
import {
  GalleryPhotoModalBodyComponent,
  GalleryPhotoModalFooterComponent,
  GalleryPhotoModalHeaderComponent,
} from './shared/components';
import { GalleryPhotoRoutingModule } from './gallery-photo-routing.module';

@NgModule({
  declarations: [GalleryPhotoComponent],
  imports: [
    CommonModule,
    GalleryPhotoRoutingModule,
    GalleryPhotoModalHeaderComponent,
    GalleryPhotoModalBodyComponent,
    GalleryPhotoModalFooterComponent,
  ],
  providers: [],
})
export class GalleryPhotoModule {}
