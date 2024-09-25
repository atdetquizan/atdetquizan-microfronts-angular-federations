import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryTaggedComponent } from './gallery-tagged.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryTaggedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryTaggedRoutingModule { }
