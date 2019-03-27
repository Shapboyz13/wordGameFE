import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  authApi = environment.authApi;
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  authPost(api:string, payload:string = ''){
    return this.http.post(this.authApi+api+'/', payload, {headers: this.headers});
  }

  isAuthenticated(){
    if(localStorage.getItem('_pokeToken')){
      return true;
    }else{
      return false;
    }
  }
}
