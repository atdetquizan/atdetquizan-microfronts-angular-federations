import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallerySavedComponent } from './gallery-saved.component';

const routes: Routes = [
  {
    path: '',
    component: GallerySavedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GallerySavedRoutingModule { }
