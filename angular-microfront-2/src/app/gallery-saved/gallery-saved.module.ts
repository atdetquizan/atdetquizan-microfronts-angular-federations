import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GallerySavedRoutingModule } from './gallery-saved-routing.module';
import { GallerySavedComponent } from './gallery-saved.component';


@NgModule({
  declarations: [
    GallerySavedComponent
  ],
  imports: [
    CommonModule,
    GallerySavedRoutingModule
  ]
})
export class GallerySavedModule { }
