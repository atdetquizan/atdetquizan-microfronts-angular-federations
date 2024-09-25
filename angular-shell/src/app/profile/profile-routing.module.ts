import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

// const routes: Routes = [
//   {
//     path: '',
//     component: ProfileComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: () =>
//           loadRemoteModule({
//             type: 'module',
//             remoteEntry: 'http://localhost:4202/remoteEntry.js',
//             exposedModule: 'GalleryPhotoModule',
//           }).then((m) => m.GalleryPhotoModule),
//       },
//       {
//         path: 'reels',
//         loadChildren: () =>
//           loadRemoteModule({
//             type: 'module',
//             remoteEntry: 'http://localhost:4202/remoteEntry.js',
//             exposedModule: 'GalleryReelsModule',
//           }).then((m) => m.GalleryReelsModule),
//       },
//       {
//         path: 'saved',
//         loadChildren: () =>
//           loadRemoteModule({
//             type: 'module',
//             remoteEntry: 'http://localhost:4202/remoteEntry.js',
//             exposedModule: 'GallerySavedModule',
//           }).then((m) => m.GallerySavedModule),
//       },
//       {
//         path: 'tagged',
//         loadChildren: () =>
//           loadRemoteModule({
//             type: 'module',
//             remoteEntry: 'http://localhost:4202/remoteEntry.js',
//             exposedModule: 'GalleryTaggedModule',
//           }).then((m) => m.GalleryTaggedModule),
//       },
//     ],
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild([])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: () => [
        {
          path: '',
          component: ProfileComponent,
          children: [
            {
              path: '',
              loadChildren: () =>
                loadRemoteModule({
                  type: 'module',
                  remoteEntry: 'http://localhost:4202/remoteEntry.js',
                  exposedModule: 'GalleryPhotoModule',
                }).then((m) => m.GalleryPhotoModule),
            },
            {
              path: 'reels',
              loadChildren: () =>
                loadRemoteModule({
                  type: 'module',
                  remoteEntry: 'http://localhost:4202/remoteEntry.js',
                  exposedModule: 'GalleryReelsModule',
                }).then((m) => m.GalleryReelsModule),
            },
            {
              path: 'saved',
              loadChildren: () =>
                loadRemoteModule({
                  type: 'module',
                  remoteEntry: 'http://localhost:4202/remoteEntry.js',
                  exposedModule: 'GallerySavedModule',
                }).then((m) => m.GallerySavedModule),
            },
            {
              path: 'tagged',
              loadChildren: () =>
                loadRemoteModule({
                  type: 'module',
                  remoteEntry: 'http://localhost:4202/remoteEntry.js',
                  exposedModule: 'GalleryTaggedModule',
                }).then((m) => m.GalleryTaggedModule),
            },
          ],
        },
      ],
      deps: [],
      multi: true,
    },
  ],
})
export class ProfileRoutingModule {}
