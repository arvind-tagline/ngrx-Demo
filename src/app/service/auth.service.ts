import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, AuthResponseData, AuthResponseSignUp, AuthResponseSignUpData } from '../models/authResponseData.model';
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
  public signUp(name: any, email: any, password: any, role: any): Observable<AuthResponseSignUp> {
    return this.http.post<AuthResponseSignUp>(environment.apiEndPoint + `/users/SignUp`, { name, email, password, role})
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

  formatUserSignUp(data: AuthResponseSignUpData) {
    const userData = {
      email: data.email,
      name: data.name,
      id: data.id,
      role: data.role
    };
    const user = new User(userData);
    return user;
  }
}
