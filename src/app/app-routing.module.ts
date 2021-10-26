import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P404Component, HomeComponent } from './routes';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'main', 
    pathMatch: 'full'
  },
  {
    path:'main', 
    component: HomeComponent
  }, 
  {
    path: 'animelist',
    loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule),
  },
  {
    path: '**',
    component: P404Component
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
