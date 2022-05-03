import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
// import { loadPosts } from 'src/app/ngrxWithApi/state/exam.actions';
import { AppStates } from 'src/app/store/app.state';
import { loadingSpinner } from 'src/app/store/shared.actions';
import { deletePost } from '../state/posts.actions';
import { getPosts, getPostsById } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public postId: any;
  public deleteId!: string;
  public posts!:Observable<Post[]>
  constructor(private store: Store<AppStates>, private fb: FormBuilder) {
   
  }

  ngOnInit(): void {
    this.posts=this.store.select(getPosts);
    // this.store.dispatch();
  }

  public getPostId(postId:any) {
    this.postId = postId;
  }

  public updatePost() {
    const postId = this.postId;
    this.store.select(getPostsById, { postId }).subscribe(data => {
      console.log('data', data);
    })
    console.log('this.postId', this.postId);
  }

  public deletePostId(id: any) {
    if (confirm("Are you sure you want to delete this post.")) {
      this.store.dispatch(deletePost({ id }))
    }
    this.store.dispatch(loadingSpinner({ status: true }));
    setTimeout(() => {
      this.store.dispatch(loadingSpinner({ status: false }));
    }, 1000)
  }
}
