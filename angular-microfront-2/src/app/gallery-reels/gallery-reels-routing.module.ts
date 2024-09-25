import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryReelsComponent } from './gallery-reels.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryReelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryReelsRoutingModule { }
