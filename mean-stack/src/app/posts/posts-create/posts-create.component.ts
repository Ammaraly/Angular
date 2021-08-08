import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent {
  DEFAULT_PLACEHOLDER = "Write something for your new post..."
  postContent: string = '';
  postInput: string = '';
  constructor() { }

  onSavePost() {
    this.postContent = this.postInput
  }

}
