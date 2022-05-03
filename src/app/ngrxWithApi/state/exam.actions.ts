import { createAction, props } from "@ngrx/store";
import { ExamData } from "src/app/models/exam.model";


export const LOAD_STUDENTS = '[exam page] load students';
export const LOAD_STUDENTS_SUCCESS = '[exam page] load students success';

export const LOAD_EXAM = '[exam page] load exam';
export const LOAD_EXAM_SUCCESS = '[exam page] load exam success';

export const loadStudents = createAction(LOAD_STUDENTS);
export const loadStudentsSuccess = createAction(LOAD_STUDENTS_SUCCESS, props<{ exam: ExamData[] }>());

export const loadExam = createAction(LOAD_EXAM);
export const loadExamSuccess = createAction(LOAD_EXAM_SUCCESS);