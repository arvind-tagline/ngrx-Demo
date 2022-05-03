import { createReducer, on } from "@ngrx/store";
import { loadStudents, loadStudentsSuccess } from "./exam.actions";
import { initialState } from "./exam.state";

const _examReducer = createReducer(initialState,
    on(loadStudents, (state: any, action: any) => {
        return {
            ...state,
        }
    }),
    on(loadStudentsSuccess, (state: any, action: any) => {
        return {
            ...state,
            exam: action.exam
        }
    })
)




export function examReducer(state: any, action: any) {
    return _examReducer(state, action)
}