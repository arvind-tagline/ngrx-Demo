import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { CustomCounterComponent } from '../custom-counter/custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
];

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CounterModule { }
