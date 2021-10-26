import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { map } from 'rxjs/operators';
import { Anime } from '../../models/anime';
import { Episodio } from '../../models/episodio';
import { AnimesService } from '../../services/animes.http.service';

@Component({
  selector: 'app-lista-anime',
  templateUrl: './lista-anime.component.html',
  styleUrls: ['./lista-anime.component.scss']
})
export class ListaAnimeComponent implements OnInit {

  public animeList$: Observable<Anime[]>;
  public animesPerPage$: Observable<Anime[]>;
  public itemsPerPage = 6;

  constructor(private animSvc: AnimesService) {
    
  }

  ngOnInit(): void {
    window.scrollTo( 0, 0 );
    this.loadAnimes();
  }

  listFilteredAnimes(anime:Observable<Anime[]>){
    window.scrollTo( 0, 0 );
    this.animeList$ = anime;
    this.animesPerPage$=this.animeList$.pipe(map(items=>items.slice(0, this.itemsPerPage)));
  }

  loadAnimes(){
    this.animeList$ = this.animSvc.loadAnimes();
    this.animesPerPage$=this.animeList$.pipe(map(items=>items.slice(0, this.itemsPerPage)));
  }

  pageChanged(event: PageChangedEvent): void {
    window.scrollTo( 0, 0 );
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endAnime = event.page * event.itemsPerPage;
    this.animesPerPage$=this.animeList$.pipe(map(items=>items.slice(startItem, endAnime)));
  }

}
