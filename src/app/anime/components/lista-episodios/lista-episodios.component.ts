import { Component, OnInit } from '@angular/core';
import { Anime } from '../../models/anime';
import { Episodio } from '../../models/episodio';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnimesService } from '../../services/animes.http.service';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.scss']
})
export class ListaEpisodiosComponent implements OnInit {

  public id: number;
  public anime$: Observable<Anime>;

  constructor(
    private route: ActivatedRoute,
    private animeSvc: AnimesService) {
  }

  ngOnInit(): void {    
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.anime$ = this.animeSvc.loadAnime(this.id);
    });
  }

}
