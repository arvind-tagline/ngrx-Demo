import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiListComponent } from './post-api-list.component';

describe('PostApiListComponent', () => {
  let component: PostApiListComponent;
  let fixture: ComponentFixture<PostApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostApiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
