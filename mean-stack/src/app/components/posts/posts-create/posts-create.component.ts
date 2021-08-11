import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSavePost(form: NgForm) {
    if (form.invalid) return;
    console.log(form)
    this.postCreated.emit({ title: form.value.title, content: form.value.content });
  }
}
