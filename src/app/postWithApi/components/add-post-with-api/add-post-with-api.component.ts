import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
import { addPostApi } from '../../store/postapi.actions';

@Component({
  selector: 'app-add-post-with-api',
  templateUrl: './add-post-with-api.component.html',
  styleUrls: ['./add-post-with-api.component.scss']
})
export class AddPostWithApiComponent implements OnInit {

  public postForm!: FormGroup;

  constructor(private fb: FormBuilder,private store:Store) { 
    this.postForm = this.fb.group({
      userId:1,
      title: ['', [Validators.required]],
      body:['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public onAdd() {
    const postApi: Posts = {
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      userId:this.postForm.value.userId
    }
    this.store.dispatch(addPostApi({ postApi }));
    this.postForm.reset();
  }
}
