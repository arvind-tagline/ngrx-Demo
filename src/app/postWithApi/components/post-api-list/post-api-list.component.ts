import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadingSpinner } from 'src/app/store/shared.actions';
import { deletePost, loadPostApi } from '../../store/postapi.actions';
import { getAllApiPost, getPostsById } from '../../store/postapi.selector';

@Component({
  selector: 'app-post-api-list',
  templateUrl: './post-api-list.component.html',
  styleUrls: ['./post-api-list.component.scss']
})
export class PostApiListComponent implements OnInit {

  public postApiData: any;
  public postId: any;
  constructor(private store:Store) { }

  ngOnInit(): void {
    // this.store.dispatch(loadingSpinner({ status: true }));
    this.store.dispatch(loadPostApi());
    this.store.select(getAllApiPost).subscribe((data) => {
      this.postApiData = data;
      // setTimeout(() => {
      //   this.store.dispatch(loadingSpinner({ status: false }));
      // }, 1000);
    })
  }
  public getPostId(postId: any) {
    this.postId = postId;
  }

  // public updatePost() {
  //   const postId = this.postId;
  //   this.store.select(getPostsById, { postId }).subscribe(data => {
  //     console.log('data', data);
  //   })
  //   console.log('this.postId', this.postId);
  // }

  public deletePostId(id: any) {
    console.log('id :>> ', id);
    if (confirm("Are you sure you want to delete this post.")) {
      this.store.dispatch(deletePost({ id }))
    }
    // this.store.dispatch(loadingSpinner({ status: true }));
    // setTimeout(() => {
    //   this.store.dispatch(loadingSpinner({ status: false }));
    // }, 1000)
  }

}
