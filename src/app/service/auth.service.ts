import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, AuthResponseData } from '../models/authResponseData.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    
  }
  
  public login(email: any, password: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(environment.apiEndPoint+`/users/Login`,{email , password})
  }

  formatUser(data: AuthResponseData) {
    const userData = {
      email: data.email,
      name: data.name,
      token: data.token,
      role:data.role
    };
    const user = new User(userData);
    return user;
  }
}
