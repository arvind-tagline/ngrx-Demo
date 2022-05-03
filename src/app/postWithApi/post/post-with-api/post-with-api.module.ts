import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { POST_STATE_NAME } from '../../store/postapi.selector';
import { postApiReducer } from '../../store/postapi.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostApiEffects } from '../../store/postapi.effects';
import { PostApiListComponent } from '../../components/post-api-list/post-api-list.component';

const routes: Routes = [
  {
    path: '',
    component:PostApiListComponent
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
