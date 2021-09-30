import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Models/Post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  readonly baseUrl: string = 
  "https://jsonplaceholder.typicode.com/posts/";
  constructor(private _http: HttpClient) { 
    
  }

  getPostById(id: number): Observable<Post> {
    const url = this.baseUrl + id;

    return this._http.get<Post>(url);
  }
  getAllPosts(): Observable<Post[]>{
    return this._http.get<Post[]>(this.baseUrl);
  }
}