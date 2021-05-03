import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private dirUrl: string = environment.direccion;
  private _auth: Auth | undefined;

  get usuario(){
    return {...this._auth}
  }

  constructor(private http: HttpClient) { }


  verificaAutentificacion(): Observable<boolean>{

    if(!localStorage.getItem('id')){
      return of(false);
     // return of(false);
    }

    return this.http.get<Auth>(`${this.dirUrl}/usuarios/1`)
            .pipe(
              map(auth => {
                console.log('map', auth);
                this._auth= auth;
                return true;
              })
            );
    //return of(true);
  }


  login(){
    return this.http.get<Auth>(`${this.dirUrl}/usuarios/1`)
            .pipe(
              tap(nUsuario => this._auth = nUsuario),
              tap(nUsuario => localStorage.setItem('id',nUsuario.id))
            );
  }
}
