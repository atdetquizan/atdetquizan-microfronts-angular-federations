import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsComponent } from './publications.component';
import { UserPostComponent, UserStatusComponent, UserStatusListComponent } from './shared/components';


@NgModule({
  declarations: [
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    UserPostComponent,
    UserStatusListComponent
  ]
})
export class PublicationsModule { }
