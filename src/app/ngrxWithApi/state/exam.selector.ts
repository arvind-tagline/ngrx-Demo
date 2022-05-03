import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExamState } from "./exam.state";

export const EXAM_STATE_NAME = 'exam';

const stateExam = createFeatureSelector<ExamState>(EXAM_STATE_NAME);

export const getAllExam = createSelector(stateExam, state => {
    return state.exam;
});

