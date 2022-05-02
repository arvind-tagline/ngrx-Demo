import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifystudentComponent } from './verifystudent.component';

describe('VerifystudentComponent', () => {
  let component: VerifystudentComponent;
  let fixture: ComponentFixture<VerifystudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifystudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifystudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
