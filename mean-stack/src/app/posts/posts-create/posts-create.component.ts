import { Component, EventEmitter, Output } from '@angular/core';

export interface Post {
  title: string,
  content: string,
}


@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent {
  DEFAULT_PLACEHOLDER = "Write something for your new post..."
  postTitle: string = '';
  postContent: string = '';
  @Output() postCreated = new EventEmitter();
  constructor() { }

  onSavePost() {
    this.postCreated.emit({ title: this.postTitle, content: this.postContent });
  }
}
