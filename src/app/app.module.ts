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
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SpinnerComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ counter: counterReducer, posts:postsReducer }),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
