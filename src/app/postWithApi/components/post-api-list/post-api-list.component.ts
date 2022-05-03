import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadingSpinner } from 'src/app/store/shared.actions';
import { loadPostApi } from '../../store/postapi.actions';
import { getAllApiPost } from '../../store/postapi.selector';

@Component({
  selector: 'app-post-api-list',
  templateUrl: './post-api-list.component.html',
  styleUrls: ['./post-api-list.component.scss']
})
export class PostApiListComponent implements OnInit {

  public postApiData: any;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadingSpinner({ status: true }));
    this.store.dispatch(loadPostApi());
    this.store.select(getAllApiPost).subscribe((data) => {
      this.postApiData = data;
      setTimeout(() => {
        this.store.dispatch(loadingSpinner({ status: false }));
      }, 1000);
    })
  }

}
