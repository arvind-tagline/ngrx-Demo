import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ExamService} from "src/app/service/exam.service";
import { map, catchError, tap, mergeMap } from "rxjs";
import { loadExam, loadExamForTeacher, loadExamForTeacherSuccess, loadExamSuccess, loadStudents, loadStudentsSuccess } from "./exam.actions";


@Injectable()
export class ExamEffects {
    constructor(private examService: ExamService, private actions$: Actions) { }

    loadStudents$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadStudents), mergeMap((action: any) => {
            return this.examService.getStudents().pipe(map((data) => {
                return loadStudentsSuccess({ student: data.data })
            })
            )
        }))

    });

    loadExamForStudent$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadExam), mergeMap((action) => {
            return this.examService.getExamsForStudent().pipe(map((data) => {
                console.log('data', data)
                return loadExamSuccess({ exam: data.data })
            }))
        }))
    });

    loadExamForTeacher$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadExamForTeacher), mergeMap((action) => {
            return this.examService.getExams().pipe(map((data) => {
                console.log('data', data)
                return loadExamForTeacherSuccess({ teacherExam: data.data })
            }))
        }))
    })

}