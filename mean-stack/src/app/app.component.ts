import { Component } from '@angular/core';
import { Post } from "./posts/posts-create/posts-create.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-stack';
  posts: Array<Post> = [];

  onPostCreated(post: Post) {
    this.posts.push(post)
  }
}
