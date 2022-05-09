import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.state';
import { LoginComponent } from './auth/login/login.component';
import { EffectsModule} from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthEffects } from './auth/state/auth.effects';
import { GetallstudentComponent } from './ngrxWithApi/component/teacher/getallstudent/getallstudent.component';
import { VerifystudentComponent } from './ngrxWithApi/component/teacher/verifystudent/verifystudent.component';
import { AllExamComponent } from './ngrxWithApi/component/student/all-exam/all-exam.component';
import { PostApiListComponent } from './postWithApi/components/post-api-list/post-api-list.component';
import { AddPostWithApiComponent } from './postWithApi/components/add-post-with-api/add-post-with-api.component';
import { UpdatePostWithApiComponent } from './postWithApi/components/update-post-with-api/update-post-with-api.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SpinnerComponent,
    SignupComponent,
    AllExamComponent,
    PostApiListComponent,
    AddPostWithApiComponent,
    UpdatePostWithApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ counter: counterReducer, posts:postsReducer }),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
