import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/Authguard/auth.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren:() => import('./auth/auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path: 'counter',
    canActivate: [AuthGuard],
    loadChildren:() => import('./counter/counter/counter.module').then(m =>m.CounterModule)
  },
  {
    path: 'post',
    canActivate: [AuthGuard],
    loadChildren:()=> import('./posts/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'exam',
    canActivate: [AuthGuard],
    loadChildren: () => import('./ngrxWithApi/exam/exam.module').then(m => m.ExamModule)
  },
  {
    path: 'postApi',
    canActivate: [AuthGuard],
    loadChildren: () => import('./postWithApi/post/post-with-api/post-with-api.module').then(m=>m.PostWithApiModule)
  },
  {
    path: '**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
