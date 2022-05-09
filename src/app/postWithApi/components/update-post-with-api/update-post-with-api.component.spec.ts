import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostWithApiComponent } from './update-post-with-api.component';

describe('UpdatePostWithApiComponent', () => {
  let component: UpdatePostWithApiComponent;
  let fixture: ComponentFixture<UpdatePostWithApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePostWithApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePostWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
