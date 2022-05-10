import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "./custom-serializer";

export const getRouterState = createFeatureSelector<RouterStateUrl>('router');

export const currentRoute = createSelector(getRouterState, (router:any) => {
    return router.state
})