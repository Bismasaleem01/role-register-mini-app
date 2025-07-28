import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://195.7.7.34:8010/apigateway/AuthService';

  constructor(private http: HttpClient) {}

  createRole(roleData: any) {
    return this.http.post(`${this.baseURL}/User/create-role`, roleData);
  }
  registerUser(userData: any) {
    return this.http.post(`${this.baseURL}/User/register`, userData);
  }
  getRoles(){
    return this.http.get(`${this.baseURL}/User/get-roles`)
  }
  getUsers(){
    return this.http.get(`${this.baseURL}/User/get-users`)
  }
}
