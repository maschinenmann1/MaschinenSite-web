import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAnimeComponent } from './components';
import { ListaEpisodiosComponent } from './components';

const routes: Routes = [
  {
    path:'', 
    pathMatch: 'full',
    component: ListaAnimeComponent
  },
  {
    path:'list', 
    component: ListaEpisodiosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }