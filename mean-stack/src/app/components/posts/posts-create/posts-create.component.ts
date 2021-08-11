import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post/post.model';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent {
  postTitle: string = '';
  postContent: string = '';
  @Output() postCreated = new EventEmitter<Post>();
  constructor() { }

  onSavePost() {
    this.postCreated.emit({ title: this.postTitle, content: this.postContent });
  }
}
