import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  public token = localStorage.getItem('token') || '';
  public header = new HttpHeaders().set('access-token', this.token);

  constructor(private http: HttpClient) {
    console.log('token', this.token)
  }

  public getStudents(): Observable<any> {
    return this.http.get(environment.apiEndPoint + `/dashboard/Teachers`, { headers: this.header });
  }

  public getExams(): Observable<any> {
    return this.http.get(environment.apiEndPoint + `/dashboard/Teachers/viewExam`, { headers: this.header })
  }

  public getExamsForStudent(): Observable<any> {
    return this.http.get(environment.apiEndPoint + `/student/studentExam`, { headers: this.header })
  }
}



