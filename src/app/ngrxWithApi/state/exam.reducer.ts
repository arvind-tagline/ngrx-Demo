import { createReducer, on } from "@ngrx/store";
import { loadExam, loadExamSuccess, loadStudents, loadStudentsSuccess } from "./exam.actions";
import { initialState } from "./exam.state";

const _examReducer = createReducer(initialState,
    on(loadStudents, (state: any) => {
        return {
            ...state,
        }
    }),
    on(loadStudentsSuccess, (state: any, action: any) => {
        return {
            ...state,
            student: action.student
        }
    }), 
    on(loadExam, (state: any) => {
        return {
            ...state,
        }
    }), 
    on(loadExamSuccess, (state: any, action: any) => {
        return {
            ...state,
            exam: action.exam
        }
    })
)




export function examReducer(state: any, action: any) {
    return _examReducer(state, action)
}