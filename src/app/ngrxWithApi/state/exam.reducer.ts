import { createReducer, on } from "@ngrx/store";
import { loadExam, loadExamForTeacher, loadExamForTeacherSuccess, loadExamSuccess, loadStudents, loadStudentsSuccess } from "./exam.actions";
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
            payload: action.payload
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
            payload: action.payload
        }
    }),
    on(loadExamForTeacher, (state: any, action: any) => {
        return {
            ...state,
        }
    }),
    on(loadExamForTeacherSuccess, (state: any, action: any) => {
        return {
            ...state,
            payload: action.payload
        }
    })
)




export function examReducer(state: any, action: any) {
    return _examReducer(state, action)
}