import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogin } from './auth/state/auth.actions';
import { AppStates } from './store/app.state';
import { getLoading } from './store/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngrx-demo';

  public showLoading!: Observable<boolean>;

  constructor(private store: Store<AppStates>){}

  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    this.store.dispatch(autoLogin())
  }
}
