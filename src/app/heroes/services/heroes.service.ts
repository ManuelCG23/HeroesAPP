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

  agregarHeroe( heroe: Heroe ) : Observable<Heroe>{
    return this.http.post<Heroe>(`${this.dirURL}/heroes`, heroe);
  }

  actualizarHeroe( heroe: Heroe ) : Observable<Heroe>{
    return this.http.put<Heroe>(`${this.dirURL}/heroes/${heroe.id}`, heroe);
  }

  borrarHeroe( id: string ) : Observable<any>{
    return this.http.delete<any>(`${this.dirURL}/heroes/${id}`);
  }


  // http://localhost:3000/heroes?q=a&_limit=7
}