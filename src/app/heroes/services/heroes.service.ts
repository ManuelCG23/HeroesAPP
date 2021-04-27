import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private dirURL: string = environment.direccion;
  private numSug: number = 7;

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.dirURL}/heroes`);
  }

  getHeroePorID(id: string) : Observable<Heroe>{
    return this.http.get<Heroe>(`${this.dirURL}/heroes/${id}`);
  }

  getSugerencias(termino: string) : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.dirURL}/heroes?q=${termino}&_limit=${this.numSug}`);
  }



  // http://localhost:3000/heroes?q=a&_limit=7
}