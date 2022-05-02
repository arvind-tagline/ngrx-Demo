import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStates } from 'src/app/store/app.state';
import { loadingSpinner } from 'src/app/store/shared.actions';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginForm!:FormGroup;

  constructor(private fb: FormBuilder,private store: Store<AppStates>) { 
    this.loginForm=this.fb.group({
      email: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }

  public onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(loadingSpinner({ status: true }));
    this.store.dispatch(loginStart({ email, password }));
  }
}
