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
  public singlePost: any;
  public deletId!: any;
  public userAllPost: any;
  public userId: any;

  constructor(private store: Store) { }

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
  public deleteId(id:any) {
    this.deletId = id;
  }

  // public updatePost() {
  //   const postId = this.postId;
  //   this.store.select(getPostsById, { postId }).subscribe(data => {
  //     console.log('data', data);
  //   })
  //   console.log('this.postId', this.postId);
  // }

  
  public getSinglePost(id: any, userId: any) {
    this.userId = userId;
    this.singlePost = this.postApiData.find((post: any) => post.id === id)
  }
  
  public getUserAllPost() {
    this.userAllPost = this.postApiData.filter((post: any) => post.userId === this.userId);
  }
  
  public deletePostId() {
    this.store.dispatch(deletePost({ id:this.deletId }))
    // if (confirm("Are you sure you want to delete this post.")) {
    // }
    // this.store.dispatch(loadingSpinner({ status: true }));
    // setTimeout(() => {
    //   this.store.dispatch(loadingSpinner({ status: false }));
    // }, 1000)
  }



}
