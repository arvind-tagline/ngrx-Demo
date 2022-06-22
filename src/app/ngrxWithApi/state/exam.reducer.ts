import { createReducer, on } from "@ngrx/store";
import { loadExam, loadExamForTeacher, loadExamForTeacherSuccess, loadExamSuccess, loadStudents, loadStudentsSuccess } from "./exam.actions";
import {  initialState } from "./exam.state";

const _examReducer = createReducer(initialState,
    on(loadStudents, (state: any) => {
        return {
            ...state,
        }
    }),
    on(loadStudentsSuccess, (state: any, action: any) => {
        // return examAdapter.setAll(action.payload, state);

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
        // return examAdapter.setAll(action.payload, state);

        return {
            ...state,
            exam: action.exam
        }
    }),
    on(loadExamForTeacher, (state: any, action: any) => {
        return {
            ...state,
        }
    }),
    on(loadExamForTeacherSuccess, (state: any, action: any) => {
        // return examAdapter.setAll(action.payload, state);
        
        return {
            ...state,
            teacherExam: action.teacherExam
        }
    })
)




export function examReducer(state: any, action: any) {
    return _examReducer(state, action)
}