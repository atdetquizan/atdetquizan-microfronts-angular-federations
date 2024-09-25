import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./gallery-photo/gallery-photo.module').then(
        (m) => m.GalleryPhotoModule
      ),
  },
  {
    path: 'reels',
    loadChildren: () =>
      import('./gallery-reels/gallery-reels.module').then(
        (m) => m.GalleryReelsModule
      ),
  },
  {
    path: 'saved',
    loadChildren: () =>
      import('./gallery-saved/gallery-saved.module').then(
        (m) => m.GallerySavedModule
      ),
  },
  {
    path: 'tagged',
    loadChildren: () =>
      import('./gallery-tagged/gallery-tagged.module').then(
        (m) => m.GalleryTaggedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
