import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppStates } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public posts!:Observable<Post[]>
  constructor(private store: Store<AppStates>) { }

  ngOnInit(): void {
    this.posts=this.store.select(getPosts);
    // this.store.dispatch()
  }

}
