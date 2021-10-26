import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeRoutingModule } from './anime-routing.module';
import { COMPONENTS } from './components';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    PaginationModule
  ]
})
export class AnimeModule { }
