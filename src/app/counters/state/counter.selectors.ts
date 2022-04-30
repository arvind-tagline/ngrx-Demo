import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterData } from "./counter.state";


const counterState = createFeatureSelector<CounterData>('counter');//counter get from app module

export const getCounter = createSelector(counterState, state => {
    return state.counter;
});

export const getName = createSelector(counterState, state => {
    return state.name;
});