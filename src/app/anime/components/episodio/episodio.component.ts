import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Episodio } from '../../models/episodio';
import { AnimesService } from '../../services/animes.http.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.scss']
})
export class EpisodioComponent implements OnInit {

  public id:number;
  public numeroEpisodio: number;
  public episodio$: Observable<Episodio>;
  public getSanitizer: DomSanitizer;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private animeSvc: AnimesService) {
      this.getSanitizer = this.sanitizer;
  }

  ngOnInit(): void {    
    this.route.paramMap.subscribe(params => {
      this.numeroEpisodio = Number(params.get('num'));
      this.id = Number(params.get('id'));
      this.episodio$ = this.animeSvc.loadEpisode(this.numeroEpisodio, this.id);
    });
  }
}
