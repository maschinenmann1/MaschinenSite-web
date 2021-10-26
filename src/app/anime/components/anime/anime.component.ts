import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anime } from '../../models/anime';
import { AnimesService } from '../../services/animes.http.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  public assetFolder = environment.assetsFolder;
  public anime$: Observable<Anime>;
  @Input() public id: number;

  constructor(private animeService: AnimesService) { 
  }

  ngOnInit(): void {
    this.anime$ = this.animeService.loadAnime(this.id);
  }

}
