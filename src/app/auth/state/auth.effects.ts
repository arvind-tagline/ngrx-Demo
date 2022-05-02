import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { Store } from "@ngrx/store";
import { AppStates } from "src/app/store/app.state";
import { loadingSpinner } from "src/app/store/shared.actions";


@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService,private store: Store<AppStates>) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart), exhaustMap((actions: any) => {
            return this.authService.login(actions.email, actions.password).pipe(map((data) => {
                this.store.dispatch(loadingSpinner({ status: false }));
                const user = this.authService.formatUser(data.data);
                console.log('data', data);
                console.log('user', user)
                return loginSuccess({user})
            })
            );
        })
        );
    })
}