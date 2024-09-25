import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPhotoComponent } from './gallery-photo.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryPhotoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryPhotoRoutingModule {}
