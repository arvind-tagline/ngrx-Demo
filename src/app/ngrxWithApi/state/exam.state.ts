import { Exam, ExamData } from "src/app/models/exam.model";

export interface ExamState{
    student: ExamData[],
    exam: Exam[],
    teacherExam: Exam[],

}

export const initialState: ExamState = {
    // exam: [
    //     {
    //         _id: '1', name: 'Test 1', email: 'This is a test 1 email', status: 'student'
    //     },
    //     {
    //         _id: '2', name: 'Test 2', email: 'This is a test 2 email', status: 'student'
    //     },
    //     {
    //         _id: '3', name: 'Test 3', email: 'This is a test 3 email', status: 'student'
    //     },
    //     {
    //         _id: '4', name: 'Test 4', email: 'This is a test 4 email', status: 'student'
    //     },
    // ]
    student: [],
    exam: [],
    teacherExam: [],
}
