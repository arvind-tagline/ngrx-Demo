import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadExamForTeacher } from 'src/app/ngrxWithApi/state/exam.actions';
import { getAllExamForTeacher } from 'src/app/ngrxWithApi/state/exam.selector';
import { loadingSpinner } from 'src/app/store/shared.actions';

@Component({
  selector: 'app-show-all-exam',
  templateUrl: './show-all-exam.component.html',
  styleUrls: ['./show-all-exam.component.scss']
})
export class ShowAllExamComponent implements OnInit {


  public showAllExam: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadingSpinner({ status: true }));
    this.store.dispatch(loadExamForTeacher());
    this.store.select(getAllExamForTeacher).subscribe((res) => {
      this.showAllExam = res;
      console.log('res', res)
    });


    setTimeout(() => {
      this.store.dispatch(loadingSpinner({ status: false }));
    }, 1000);
  }

}
