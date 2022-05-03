import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadingSpinner } from 'src/app/store/shared.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // public counter: number = 0;
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadingSpinner({ status: true }));
    setTimeout(() => {
      this.store.dispatch(loadingSpinner({ status: false }));
    }, 1000);
  }


  // public onIncrement(): void {
  //   this.counter++;
  // }

  // public onDecrement(): void {
  //   this.counter--;
  // }

  // public onReset(): void {
  //   this.counter = 0;
  // }
}

