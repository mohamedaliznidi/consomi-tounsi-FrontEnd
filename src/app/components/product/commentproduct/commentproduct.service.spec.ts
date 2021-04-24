import { TestBed } from '@angular/core/testing';

import { CommentproductService } from './commentproduct.service';

describe('CommentproductService', () => {
  let service: CommentproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
