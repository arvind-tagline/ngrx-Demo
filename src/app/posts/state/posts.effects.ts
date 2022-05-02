// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { PostsService } from "src/app/service/posts.service";
// import { loadPosts } from "./posts.actions";
// import { exhaustMap, map, catchError, tap, mergeMap } from "rxjs";


// @Injectable()
// export class PostsEffects{
//     constructor(private postsService: PostsService, private actions$: Actions) {
        
//     }

//     loadPosts$ = createEffect(() => {
//         return this.actions$.pipe(ofType(loadPosts), mergeMap((action: any) => {
//             return this.postsService.getPosts().pipe(map((data) => {
//                 console.log('data', data)
//             })
//             )
//         }))

//     },{dispatch:false});

// }