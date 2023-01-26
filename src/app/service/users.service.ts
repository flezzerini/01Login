import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient 
  ) {}

  //post login
  postLogin(body: IUserLogin){
    return this._http.post('http://localhost:3000/auth/login', body)
  }

  //post register
  postRegister(body: IUserLogin){
    return this._http.post('http://localhost:3000/auth/new-user', body)
  }
}
