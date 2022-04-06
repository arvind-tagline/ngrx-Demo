import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCount } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {

  public value!: number;
  constructor(private store: Store<{counter:number}>) { }

  ngOnInit(): void {
  }


  public add() {
    this.store.dispatch(customCount({value:this.value}))
    console.log('value', this.value)
  }
}
