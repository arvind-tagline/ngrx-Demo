import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostWithApiComponent } from './add-post-with-api.component';

describe('AddPostWithApiComponent', () => {
  let component: AddPostWithApiComponent;
  let fixture: ComponentFixture<AddPostWithApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostWithApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
