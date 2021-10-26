import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AnimesService {

  private readonly API_URL = environment.apiHost + '/animelist';

  constructor(private http: HttpClient) { }

  public loadAnimes() {
    return this.http.get<Anime[]>(this.API_URL)
      .pipe(map(animes => animes.map(a => new Anime(a))));
  }

  public addAnimes(anime: Anime) {
    return this.http.post(this.API_URL, anime);
  }

  public loadAnime(id: number) {
    return this.loadAnimes().pipe(map(animes => animes.find(a => a.id === id)));
  }

  public deleteAnime(id: number) {
    return this.http.delete(this.API_URL + `/${id}`);
  }

  public updateAnime(id: number, anime: Anime) {
    return this.http.patch(this.API_URL + `/${id}`, anime);
  }

}
