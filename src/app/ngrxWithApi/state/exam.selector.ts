import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExamState } from "./exam.state";

export const EXAM_STATE_NAME = 'exam';

const stateExam = createFeatureSelector<ExamState>(EXAM_STATE_NAME);

// export const examSelector = examAdapter.getSelectors();

// export const getAllExam = createSelector(stateStudent, examSelector.selectAll);

// export const getExamEntity = createSelector(stateStudent, examSelector.selectEntities);


// This code is without adapter
export const getAllStudent = createSelector(stateExam, state => {
    return state.payload;
});

export const getAllExam = createSelector(stateExam, state => {
    return state.payload;
});

export const getAllExamForTeacher = createSelector(stateExam, state => {
    return state.payload;
})
