import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { title: "My First Post", content: "This is my first post here!" },
    { title: "My Second Post", content: "This is my second post here!" },
    { title: "My Third Post", content: "This is my third post here!" },
  ]

  // posts = []

  constructor() { }

}
