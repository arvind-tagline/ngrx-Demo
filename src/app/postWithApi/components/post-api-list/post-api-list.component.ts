import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
    this.store.dispatch(loadPostApi());
    this.store.select(getAllApiPost).subscribe((data) => {
      this.postApiData = data;
    })
  }

}
