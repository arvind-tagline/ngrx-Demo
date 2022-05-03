import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExamState } from "./exam.state";

export const EXAM_STATE_NAME = 'exam';

const stateStudent = createFeatureSelector<ExamState>(EXAM_STATE_NAME);

export const getAllStudent = createSelector(stateStudent, state => {
    return state.student;
});

export const getAllExam = createSelector(stateStudent, state => {
    return state.exam;
});

export const getAllExamForTeacher = createSelector(stateStudent, state => {
    return state.teacherExam;
})
