import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ExamService} from "src/app/service/exam.service";
import { map, catchError, tap, mergeMap } from "rxjs";
import { loadStudents, loadStudentsSuccess } from "./exam.actions";


@Injectable()
export class ExamEffects {
    constructor(private examService: ExamService, private actions$: Actions) { }

    loadStudents$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadStudents), mergeMap((action: any) => {
            return this.examService.getStudents().pipe(map((data) => {
                return loadStudentsSuccess({ exam: data.data })
            })
            )
        }))

    });

}