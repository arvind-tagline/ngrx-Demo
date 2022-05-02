import { createAction, props } from "@ngrx/store";

export const SET_LOADING_SPINNER_ACTION = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE = '[shared state] set erroe message';


export const loadingSpinner = createAction(SET_LOADING_SPINNER_ACTION, props<{ status: boolean }>());
export const errorMessage = createAction(SET_ERROR_MESSAGE,props<{ message: string}>())