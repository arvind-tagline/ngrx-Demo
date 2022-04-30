import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterData } from "./counter.state";


export const COUNTER_STATE_NAME ='counter'

const counterState = createFeatureSelector<CounterData>(COUNTER_STATE_NAME);//counter get from app module

export const getCounter = createSelector(counterState, state => {
    return state.counter;
});

export const getName = createSelector(counterState, state => {
    return state.name;
});