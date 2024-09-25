import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryReelsRoutingModule } from './gallery-reels-routing.module';
import { GalleryReelsComponent } from './gallery-reels.component';


@NgModule({
  declarations: [
    GalleryReelsComponent
  ],
  imports: [
    CommonModule,
    GalleryReelsRoutingModule
  ]
})
export class GalleryReelsModule { }
