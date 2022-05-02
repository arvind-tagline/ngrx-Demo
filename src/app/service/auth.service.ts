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

  public formatUser(data: AuthResponseData) {
    const userData = {
      email: data.email,
      name: data.name,
      token: data.token,
      role:data.role
    };
    const user = new User(userData);
    return user;
  }

  public formatUserSignUp(data: AuthResponseSignUpData) {
    const userData = {
      email: data.email,
      name: data.name,
      id: data.id,
      role: data.role
    };
    const user = new User(userData);
    return user;
  }

  public setUserDataLocal(userData:User) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  public getUserLocal() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const usersData = {
        email: userData.userData.email,
        name: userData.userData.name,
        token: userData.userData.token,
        role: userData.userData.role
      };
      const user = new User(usersData)
      return user;
    }
    return null;
  }

  public logOut(){
    localStorage.removeItem('userData');
  }
}
