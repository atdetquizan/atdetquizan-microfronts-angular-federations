import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryTaggedRoutingModule } from './gallery-tagged-routing.module';
import { GalleryTaggedComponent } from './gallery-tagged.component';


@NgModule({
  declarations: [
    GalleryTaggedComponent
  ],
  imports: [
    CommonModule,
    GalleryTaggedRoutingModule
  ]
})
export class GalleryTaggedModule { }
