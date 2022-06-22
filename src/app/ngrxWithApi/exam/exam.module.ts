import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetallstudentComponent } from '../component/teacher/getallstudent/getallstudent.component';
import { VerifystudentComponent } from '../component/teacher/verifystudent/verifystudent.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EXAM_STATE_NAME } from '../state/exam.selector';
import { examReducer } from '../state/exam.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExamEffects } from '../state/exam.effects';
import { AllExamComponent } from '../component/student/all-exam/all-exam.component';
import { ShowAllExamComponent } from '../component/teacher/show-all-exam/show-all-exam.component';

const routes: Routes = [
  {
    path: '',
    component: GetallstudentComponent
  },
  {
    path: 'allExam',
    component:AllExamComponent
  },
  {
    path: 'showAllExam',
    component :ShowAllExamComponent
  },
  {
    path: '**',
    redirectTo:''
  }

];

@NgModule({
  declarations: [
    GetallstudentComponent,
    VerifystudentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(EXAM_STATE_NAME, examReducer),
    EffectsModule.forFeature([ExamEffects])
  ]
})
export class ExamModule { }
