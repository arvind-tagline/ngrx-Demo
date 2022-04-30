import { createAction, props } from "@ngrx/store";


export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customCount = createAction('customCount', props<{ value: number }>());
export const customCountDecriment = createAction('customCountDecriment', props<{ value: number }>());
export const changeName=createAction('changeName')

