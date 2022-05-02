import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStates } from 'src/app/store/app.state';
import { loadingSpinner } from 'src/app/store/shared.actions';
import { signUpStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpForm!:FormGroup;

  constructor(private fb: FormBuilder,private store: Store<AppStates>) {
    this.signUpForm = this.fb.group({
      name: '',
      email: '',
      password: '',
      role:'Teacher'
    })
   }

  ngOnInit(): void {
  }


  public onSignUp() {
    const data = this.signUpForm.value;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    this.store.dispatch(loadingSpinner({ status: true }));
    this.store.dispatch(signUpStart({name,email,password}));
    console.log('data', data)
  }
}
