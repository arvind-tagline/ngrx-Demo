import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ExamService} from "src/app/service/exam.service";
import { map, catchError, tap, mergeMap, withLatestFrom } from "rxjs";
import { loadExam, loadExamForTeacher, loadExamForTeacherSuccess, loadExamSuccess, loadStudents, loadStudentsSuccess } from "./exam.actions";
import { AppStates } from "src/app/store/app.state";
import { Store } from "@ngrx/store";


@Injectable()
export class ExamEffects {
    constructor(private examService: ExamService, private actions$: Actions, private store:Store<AppStates>) { }

    loadStudents$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadStudents),
            // withLatestFrom(this.store.select()),
            mergeMap((action: any) => {
            return this.examService.getStudents().pipe(map((data) => {
                return loadStudentsSuccess({ payload: data.data })
            })
            )
        }))

    });

    loadExamForStudent$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadExam), mergeMap((action) => {
            return this.examService.getExamsForStudent().pipe(map((data) => {
                return loadExamSuccess({ payload: data.data })
            }))
        }))
    });

    loadExamForTeacher$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadExamForTeacher), mergeMap((action) => {
            return this.examService.getExams().pipe(map((data) => {
                return loadExamForTeacherSuccess({ payload: data.data })
            }))
        }))
    })

}