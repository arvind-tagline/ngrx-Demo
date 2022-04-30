import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/service/auth.service";


@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart), exhaustMap((actions: any) => {
            return this.authService.login(actions.email, actions.password).pipe(map((data) => {
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