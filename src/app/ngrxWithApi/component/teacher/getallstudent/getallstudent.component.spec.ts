import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallstudentComponent } from './getallstudent.component';

describe('GetallstudentComponent', () => {
  let component: GetallstudentComponent;
  let fixture: ComponentFixture<GetallstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
