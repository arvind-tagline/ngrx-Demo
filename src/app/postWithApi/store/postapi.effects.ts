import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostapiService } from "src/app/service/postapi.service";
import { loadPostApi, loadPostApiSuccess } from "./postapi.actions";
import { map, catchError, tap, mergeMap } from "rxjs";

@Injectable()
export class PostApiEffects {

    constructor(private postApiService: PostapiService, private actions$: Actions) { }
    
    loadPostApi$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadPostApi), mergeMap((action) => {
            return this.postApiService.getPostData().pipe(map((data) => {
                console.log('data :>> ', data);
                return loadPostApiSuccess({ postApi: data})
            }))
        }))
    })
    
}