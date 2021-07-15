import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    children: [
      {
        path: "",
        loadChildren: () => import('./principal/principal.module').then(
           m => m.PrincipalPageModule)
      },
      {
        path: ":principalId",
        loadChildren: () => import('./principal/detalles/detalles.module').then(
          m => m.DetallesPageModule
        )
      }

    ]

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
