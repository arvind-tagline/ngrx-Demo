import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren:() => import('./auth/auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path: 'counter',
    loadChildren:() => import('./counter/counter/counter.module').then(m =>m.CounterModule)
  },
  {
    path: 'post',
    loadChildren:()=> import('./posts/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'exam',
    loadChildren: () => import('./ngrxWithApi/exam/exam.module').then(m => m.ExamModule)
  },
  {
    path: 'postApi',
    loadChildren: () => import('./postWithApi/post/post-with-api/post-with-api.module').then(m=>m.PostWithApiModule)
  },
  {
    path: '**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
