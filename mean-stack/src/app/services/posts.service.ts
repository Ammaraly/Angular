import { Injectable } from '@angular/core';
import { Post } from '../models/post/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [
    { title: "My First Post", content: "This is my first post here!" },
    { title: "My Second Post", content: "This is my second post here!" },
    { title: "My Third Post", content: "This is my third post here!" },
  ]
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    let post: Post = {
      title,
      content
    }
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }
}
