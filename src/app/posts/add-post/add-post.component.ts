import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppStates } from 'src/app/store/app.state';
import { loadingSpinner } from 'src/app/store/shared.actions';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  public postForm!: FormGroup;
  public showLoading!: Observable<boolean>;

  constructor(private fb: FormBuilder,private store: Store<AppStates>) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public onAdd(): void{
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(loadingSpinner({ status: true }));
    
    this.store.dispatch(addPost({ post }));
    this.postForm.reset();

    setTimeout(() => {
      this.store.dispatch(loadingSpinner({ status: false }));
    },1000)
  }


}
