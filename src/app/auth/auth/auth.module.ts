import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from '../state/auth.selectors';
import { AuthReducer } from '../state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../state/auth.effects';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo:'login'
      },
      {
        path: 'login',
        component:LoginComponent
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer)
  ]
})
export class AuthModule { }
