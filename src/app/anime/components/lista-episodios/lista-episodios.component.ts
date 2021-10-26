import { Component, OnInit } from '@angular/core';
import { Anime } from '../../models/anime';
import { Episodio } from '../../models/episodio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.scss']
})
export class ListaEpisodiosComponent implements OnInit {

  public id: number;
  public title: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {    
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }

}
