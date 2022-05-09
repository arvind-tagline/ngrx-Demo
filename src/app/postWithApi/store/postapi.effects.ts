import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostapiService } from "src/app/service/postapi.service";
import { addPostApi, addPostApiSuccess, deletePost, deletePostSuccess, loadPostApi, loadPostApiSuccess, updatePost, updatePostSuccess } from "./postapi.actions";
import { map, exhaustMap, tap, mergeMap, switchMap } from "rxjs";

@Injectable()
export class PostApiEffects {

    constructor(private postApiService: PostapiService, private actions$: Actions) { }

    loadPostApi$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadPostApi), mergeMap((action) => {
            return this.postApiService.getPostData().pipe(map((data) => {
                console.log('data :>> ', data);
                return loadPostApiSuccess({ postApi: data })
            }))
        }))
    });

    addPostApi$ = createEffect(() => {
        return this.actions$.pipe(ofType(addPostApi),
            mergeMap((actions: any) => {
                return this.postApiService.addPost(actions.postApi).pipe(
                    map((data) => {
                        const addPost = {
                            ...actions.postApi,
                            id: data.id,
                        }
                        return addPostApiSuccess(addPost);
                    })
                );
            })
        );
    });

    updatePostApi$ = createEffect(() => {
        return this.actions$.pipe(ofType(updatePost),
            switchMap((action) => {
                return this.postApiService.upDatePost(action.postApi).pipe(
                    map((data) => {
                        return updatePostSuccess({ postApi: action.postApi });
                    })
                );
            })
        );
    });

    deletePostApi$ = createEffect(() => {
        return this.actions$.pipe(ofType(deletePost),
            switchMap((action) => {
                return this.postApiService.deletePost(action.id).pipe(
                    map((data) => {
                        return deletePostSuccess({ id: action.id })
                    })
                );
            }));
    });

}