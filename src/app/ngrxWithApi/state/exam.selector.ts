import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  ExamState } from "./exam.state";

export const EXAM_STATE_NAME = 'exam';

const stateExam = createFeatureSelector<ExamState>(EXAM_STATE_NAME);

// export const examSelector = examAdapter.getSelectors();

// export const getAllExam = createSelector(stateExam, examSelector.selectAll);

// export const getExamEntity = createSelector(stateExam, examSelector.selectEntities);


// This code is without adapter
export const getAllStudent = createSelector(stateExam, state => {
    return state.student;
});

export const getAllExam = createSelector(stateExam, state => {
    return state.exam;
});

export const getAllExamForTeacher = createSelector(stateExam, state => {
    return state.teacherExam;
})
