import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppStates } from 'src/app/store/app.state';
import { updatePost } from '../state/posts.actions';
import { getPostsById } from '../state/posts.selectors';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit,OnDestroy {

  public updateForm!: FormGroup;
  public postData!: Post;
  public subscriptions!:Subscription;
  constructor(private store: Store<AppStates>, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const id = params.get('id');
      this.subscriptions=this.store.select(getPostsById, { id }).subscribe((data) => {
        this.postData = data;
        console.log('this.postData', this.postData)
        this.updateForm = this.fb.group({
          title: new FormControl(this.postData.title),
          description: new FormControl(this.postData.description),
        });
      });
    });

  }


  public onUpdate() {
    const title = this.updateForm.value.title;
    const description = this.updateForm.value.description;

    const post: Post = {
      id: this.postData.id,
      title,
      description
    };

    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['post']);
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}

