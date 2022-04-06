import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeName, customCount, customCountDecriment } from '../state/counter.actions';
import { getName } from '../state/counter.selectors';
import { CounterData } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {

  public value!: number;
  public name: string = ''
  public name$!: Observable<string>;
  constructor(private store: Store<{ counter: CounterData}>) { }

  ngOnInit(): void {
    // this.store.select(getName).subscribe(name => {
    //   console.log('name obs');
    //   this.name = name;
    //   console.log('date', name)
    // })
    this.name$ = this.store.select(getName);

  }


  public add():void {
    this.store.dispatch(customCount({value:this.value}))
    console.log('value', this.value)
  }

  public decrementValue(): void {
    this.store.dispatch(customCountDecriment({ value: this.value }))
    console.log('value', this.value)
  }

  public onChange(): void{
    this.store.dispatch(changeName());
  }
}
