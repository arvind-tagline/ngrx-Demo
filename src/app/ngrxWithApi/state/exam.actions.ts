import { createAction, props } from "@ngrx/store";
import { Exam, ExamData } from "src/app/models/exam.model";


export const LOAD_STUDENTS = '[exam page] load students';
export const LOAD_STUDENTS_SUCCESS = '[exam page] load students success';

export const LOAD_EXAM = '[exam page] load exam';
export const LOAD_EXAM_SUCCESS = '[exam page] load exam success';

export const LOAD_EXAM_FOR_TEACHER = '[exam page] load exam for teacher';
export const LOAD_EXAM_FOR_TEACHER_SUCCESS = '[exam page] load exam for teacher success';


export const loadStudents = createAction(LOAD_STUDENTS);
export const loadStudentsSuccess = createAction(LOAD_STUDENTS_SUCCESS, props<{ student: ExamData[] }>());

export const loadExam = createAction(LOAD_EXAM);
export const loadExamSuccess = createAction(LOAD_EXAM_SUCCESS, props<{ exam: Exam[] }>());

export const loadExamForTeacher = createAction(LOAD_EXAM_FOR_TEACHER);
export const loadExamForTeacherSuccess = createAction(LOAD_EXAM_FOR_TEACHER_SUCCESS, props<{ teacherExam: Exam[]}>());