import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadExam } from 'src/app/ngrxWithApi/state/exam.actions';
import { getAllExam } from 'src/app/ngrxWithApi/state/exam.selector';

@Component({
  selector: 'app-all-exam',
  templateUrl: './all-exam.component.html',
  styleUrls: ['./all-exam.component.scss']
})
export class AllExamComponent implements OnInit {


  public examsData: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadExam());
    this.store.select(getAllExam).subscribe((exams) => {
      this.examsData = exams;
    });
  }

}
