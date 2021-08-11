import { Component } from '@angular/core';
import { Post } from "./models/post/post.model";
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-stack';
  posts: Array<Post> = [];

  constructor(public postsService: PostsService) { }

  onPostCreated(post: Post) {
    this.posts.push(post)
  }
}
