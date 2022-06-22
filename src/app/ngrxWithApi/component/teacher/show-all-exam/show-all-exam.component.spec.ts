import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllExamComponent } from './show-all-exam.component';

describe('ShowAllExamComponent', () => {
  let component: ShowAllExamComponent;
  let fixture: ComponentFixture<ShowAllExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
