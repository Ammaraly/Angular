import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent {
  newPost = "NO CONTENT"
  constructor() { }

  onSavePost() {
    console.log("Post Saved!");
  }

}
