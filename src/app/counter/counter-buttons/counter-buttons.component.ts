import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterData } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  // @Output() increment: any = new EventEmitter();
  // @Output() decrement: any = new EventEmitter();
  // @Output() reset: any = new EventEmitter();

  constructor(private store: Store<{ counter: CounterData}>) { }

  ngOnInit(): void {
  }


  public onIncrement(): void {
    // this.increment.emit()
    this.store.dispatch(increment());
  }

  public onDecrement(): void {
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }
  public onReset(): void {
    this.store.dispatch(reset());
    // this.reset.emit();
  }
}
