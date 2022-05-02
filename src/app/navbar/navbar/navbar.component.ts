import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthenticated} from 'src/app/auth/state/auth.selectors';
import { AppStates } from 'src/app/store/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isAuthState!: Observable<boolean>;

  constructor(private store: Store<AppStates>) { 

  }

  ngOnInit(): void {
    this.isAuthState = this.store.select(isAuthenticated);
  }

}
