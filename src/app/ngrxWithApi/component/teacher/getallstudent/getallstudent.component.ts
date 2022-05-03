import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStudents } from 'src/app/ngrxWithApi/state/exam.actions';
import { getAllStudent } from 'src/app/ngrxWithApi/state/exam.selector';

@Component({
  selector: 'app-getallstudent',
  templateUrl: './getallstudent.component.html',
  styleUrls: ['./getallstudent.component.scss']
})
export class GetallstudentComponent implements OnInit {

  public allStudents:any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
    this.store.select(getAllStudent).subscribe((studentData: any) => {
      this.allStudents = studentData;
      console.log('data :>> ', studentData);
    });
    console.log('this.allStudent', this.allStudents)
  }

}
