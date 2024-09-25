import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () =>
      import('./components/gallery').then((m) => m.GalleryComponent),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./components/tabs').then((m) => m.TabsComponent),
  },
  {
    path: 'user-info',
    loadChildren: () =>
      import('./components/user-info').then((m) => m.UserInfoComponent),
  },
  {
    path: 'sidebar',
    loadChildren: () =>
      import('./components/sidebar').then((m) => m.SidebarComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
