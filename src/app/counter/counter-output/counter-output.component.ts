import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { AppStates } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';
import { CounterData } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {


  // @Input() counter!: number;
  public counter!: number;
  public counter$!: Observable<number>
  constructor(private store: Store<AppStates>) { }

  ngOnInit(): void {
    // this.store.select(getCounter).subscribe(counter => {
    //   console.log('counter obs');
    //   this.counter = counter;
    // });

    this.counter$ = this.store.select(getCounter);
    // console.log('this.counter$', this.counter$)
  }

  
}
