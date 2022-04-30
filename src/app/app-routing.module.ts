import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counters/counter/counter.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren:() => import('./counters/counter/counter.module').then(m =>m.CounterModule)
  },
  {
    path: 'post',
    loadChildren:()=> import('./posts/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: '**',
    redirectTo:'counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
