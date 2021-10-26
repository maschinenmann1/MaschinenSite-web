import { TestBed } from '@angular/core/testing';

import { AnimesService} from './animes.http.service';

describe('AnimesServiceService', () => {
  let service: AnimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
