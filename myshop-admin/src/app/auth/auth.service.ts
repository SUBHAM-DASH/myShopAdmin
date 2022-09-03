import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  serverUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}


  //SIGN UP METHOD
  signUp(data:any){
    return this.http.post(`${this.serverUrl}/api/admin/register`,data);
  }

  //LOGIN METHOD
  login(data:any){
    return this.http.post(`${this.serverUrl}/api/admin/login`,data);
  }
}
