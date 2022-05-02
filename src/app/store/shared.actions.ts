import { createAction, props } from "@ngrx/store";

export const SET_LOADING_SPINNER_ACTION = '[shared state] set loading spinner';

export const loadingSpinner = createAction(SET_LOADING_SPINNER_ACTION, props<{ status: boolean }>());