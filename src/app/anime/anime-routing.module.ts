import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAnimeComponent, ListaEpisodiosComponent, EpisodioComponent } from './components';


const routes: Routes = [
  {
    path:'', 
    pathMatch: 'full',
    component: ListaAnimeComponent
  },
  {
    path:':id', 
    component: ListaEpisodiosComponent
  },
  {
    path:':id/:num', 
    component: EpisodioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }