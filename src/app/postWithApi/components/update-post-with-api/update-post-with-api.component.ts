import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
import { deletePost, updatePost } from '../../store/postapi.actions';
import { getPostsById } from '../../store/postapi.selector';

@Component({
  selector: 'app-update-post-with-api',
  templateUrl: './update-post-with-api.component.html',
  styleUrls: ['./update-post-with-api.component.scss']
})
export class UpdatePostWithApiComponent implements OnInit {

  public postData!: Posts;
  public updatePostForm!: FormGroup;
  constructor(private store: Store, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const id = params.get('id');
      this.store.select(getPostsById, { id }).subscribe((data) => {
        this.postData = data;
        this.updatePostForm = this.fb.group({
          title: this.postData?.title,
          body:this.postData?.body,
          userId: this.postData?.userId
        });
      });
    });
  }

  public onUpdate() {
    const title = this.updatePostForm.value.title;
    const body = this.updatePostForm.value.body;
    const userId = this.updatePostForm.value.userId;
    const postApi = {
      id: this.postData.id,
      title,
      body,
      userId
    }
    this.store.dispatch(updatePost({ postApi }));
    // this.updatePostForm.reset();
    this.router.navigate(['/postApi'])
  }

}
