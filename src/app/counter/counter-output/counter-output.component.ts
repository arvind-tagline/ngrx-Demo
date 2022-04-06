import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {


  // @Input() counter!: number;
  public counter!: number;
  public counter$!: Observable<{counter:number}>
  constructor(private store: Store<{counter:{counter:any}}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(date => {
      this.counter = date.counter;
    });

    // this.counter$ = this.store.select('counter');
    // console.log('this.counter$', this.counter$)
  }

  
}
