import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostapiService } from "src/app/service/postapi.service";
import { addPostApi, addPostApiSuccess, deletePost, deletePostSuccess, loadPostApi, loadPostApiSuccess, updatePost, updatePostSuccess } from "./postapi.actions";
import { map, exhaustMap, tap, mergeMap, switchMap, withLatestFrom, of } from "rxjs";
import { Update } from "@ngrx/entity";
import { Posts } from "src/app/models/posts.model";
import { Store } from "@ngrx/store";
import { AppStates } from "src/app/store/app.state";
import { getAllApiPost } from "./postapi.selector";
import { dummyAction } from "src/app/auth/state/auth.actions";

@Injectable()
export class PostApiEffects {

    constructor(private postApiService: PostapiService, private actions$: Actions, private store: Store<AppStates>) { }

    loadPostApi$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPostApi),
            withLatestFrom(this.store.select(getAllApiPost)),
            mergeMap(([action, posts]) => {
                if (!posts.length) {
                    return this.postApiService.getPostData().pipe(
                        map((data) => {
                            return loadPostApiSuccess({ postApi: data })
                        })
                    );
                }
                return of(dummyAction());
            })
        );
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
                        const updateApiPost: Update<Posts> = {
                            id: data.id,
                            changes: data
                        }
                        return updatePostSuccess({ postApi: updateApiPost });

                        //without adapter
                        // return updatePostSuccess({ postApi: action.postApi });
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