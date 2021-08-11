import { Injectable } from '@angular/core';
import { Post } from '../models/post/post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get<Post[]>("http://localhost:3000/api/posts")
      .subscribe((posts) => {
        this.posts = posts;
        this.postsUpdated.next([...this.posts]);
      })
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    let post: Post = {
      id: "",
      title,
      content
    }
    this.http.post<{ id: string }>('http://localhost:3000/api/post', post)
      .subscribe((response) => {
        console.log(response);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts])
      });

  }
}
