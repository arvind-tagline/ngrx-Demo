import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  @Output() increment: any = new EventEmitter();
  @Output() decrement: any = new EventEmitter();
  @Output() reset: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  public onIncrement(): void {
    this.increment.emit()
  }

  public onDecrement(): void {
    this.decrement.emit();
  }
  public onReset(): void {
    this.reset.emit();
  }
}
