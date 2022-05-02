import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { autoLogin, loginStart, loginSuccess, logout, signUpStart, signUpSuccess } from "./auth.actions";
import { exhaustMap, map, catchError, tap, mergeMap } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { Store } from "@ngrx/store";
import { AppStates } from "src/app/store/app.state";
import { loadingSpinner } from "src/app/store/shared.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";


@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppStates>,
        private router: Router) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart), exhaustMap((actions: any) => {
            return this.authService.login(actions.email, actions.password).pipe(map((data) => {
                this.store.dispatch(loadingSpinner({ status: false }));
                const user = this.authService.formatUser(data.data);
                console.log('data', data);
                console.log('user', user)
                this.authService.setUserDataLocal(user);
                return loginSuccess({ user,redirect:true })
            }),
                catchError((err: any) => {
                    console.log('err', err.error.error)
                    return of();
                })
            );
        })
        );
    });

    signUp$ = createEffect(() => {
        return this.actions$.pipe(ofType(signUpStart), exhaustMap((actions: any) => {
            console.log('actions :>> ', actions);
            return this.authService.signUp(actions.name, actions.email, actions.password, actions.role).pipe(map((data) => {
                console.log('data', data)
                this.store.dispatch(loadingSpinner({ status: false }));
                const user = this.authService.formatUserSignUp(data.data);
                return signUpSuccess({ user ,redirect:true})
            })
            );
        })
        );
    });

    loginRedirect$ = createEffect(() => {
        // return this.actions$.pipe(ofType(...[loginSuccess, signUpSuccess]),
        return this.actions$.pipe(ofType(loginSuccess),
            tap((action) => {
                if (action.redirect) {
                    this.router.navigate(['/post'])
                }
            })
        )
    }, { dispatch: false });

    signUpRedirect$ = createEffect(() => {
        return this.actions$.pipe(ofType(signUpSuccess),
            tap((action) => {
                if (action.redirect) {
                    this.router.navigate(['/auth/login']);
                }
            })
        )
    }, { dispatch: false });


    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(ofType(autoLogin), mergeMap((action) => {
            const user = this.authService.getUserLocal();
            return of(loginSuccess({ user ,redirect:false})
            );
        })
        );
    });

    logout$ = createEffect(() => {
        return this.actions$.pipe(ofType(logout), map((actions: any) => {
            this.authService.logOut();
            this.router.navigate(['auth'])
        })
        )
    }, { dispatch: false });
}