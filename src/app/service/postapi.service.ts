import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  constructor(private http: HttpClient) { }

  public getPostData(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  public addPost(post:any): Observable<any> {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, post);
  }

  public upDatePost(post:any): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }

  public deletePost(id: any): Observable<any> {
    console.log('id :>> ', id);
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
