import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { POST_STATE_NAME } from '../../store/postapi.selector';
import { postApiReducer } from '../../store/postapi.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostApiEffects } from '../../store/postapi.effects';
import { PostApiListComponent } from '../../components/post-api-list/post-api-list.component';
import { AddPostWithApiComponent } from '../../components/add-post-with-api/add-post-with-api.component';
import { UpdatePostWithApiComponent } from '../../components/update-post-with-api/update-post-with-api.component';

const routes: Routes = [
  {
    path: '',
    component: PostApiListComponent,
    children: [
      {
        path: 'add',
        component:AddPostWithApiComponent
      },
      {
        path: 'update/:id',
        component: UpdatePostWithApiComponent
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME, postApiReducer),
    EffectsModule.forFeature([PostApiEffects])
  ]
})
export class PostWithApiModule { }
