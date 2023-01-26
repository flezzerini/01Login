import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, Observable } from 'rxjs';
import { IUserLogin } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient 
  ) {}

  //post login
  postLogin(body: IUserLogin): Observable<any>{
    return this._http.post('http://localhost:3000/auth/login', body ).pipe(
      //mergeMap(),
      //catchError(): Observable<any>
    )
  }

  //post register
  postRegister(body: IUserLogin): Observable<any>{
    return this._http.post('http://localhost:3000/new-user', body)
      //mergeMap(),
      //catchError(): Observable<any>
  }
}
