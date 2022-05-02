import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { UpdatePostComponent } from '../update-post/update-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from '../state/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExamEffects } from 'src/app/ngrxWithApi/state/exam.effects';


const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent
      },
      {
        path: 'update/:id',
        component: UpdatePostComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent,
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([ExamEffects])

  ]
})
export class  PostsModule { }
