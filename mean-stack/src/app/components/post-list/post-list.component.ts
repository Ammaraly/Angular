import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postSubscription: Subscription | undefined;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postSubscription = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => this.posts = posts);
  }

  ngOnDestroy() {
    this.postSubscription?.unsubscribe()
  }

}
