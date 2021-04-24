import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentproductComponent } from './commentproduct.component';

describe('CommentproductComponent', () => {
  let component: CommentproductComponent;
  let fixture: ComponentFixture<CommentproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
