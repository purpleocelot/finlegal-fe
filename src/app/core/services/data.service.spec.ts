import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Authority } from '../models/authority';
import { AuthorityRating } from '../models/authority-rating';

describe('DataService', () => {
  let dataService: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [DataService]
    });
    dataService = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should get authorities', () => {
    const expectedUrl = 'https://localhost:44365/api/authorities';
    const testData = [
      { id: 1, name: 'aaa' },
      { id: 2, name: 'bbb' }
    ] as Authority[];
    let result: Authority[] | undefined;
    dataService.getAuthorities().subscribe(
      (response) => {
        result = response;
      }
    );

    const request = httpMock.expectOne(expectedUrl);
    request.flush(testData);
    httpMock.verify();

    expect(result).toEqual(testData);
  });

  it('should get authority ratings', () => {
    const expectedUrl = 'https://localhost:44365/api/authority/1';
    const testData = [
      { name: 'aaa', tally: 111, value: 1.11 },
      { name: 'bbb', tally: 222, value: 2.22 }
    ] as AuthorityRating[];
    let result: AuthorityRating[] | undefined;
    dataService.getAuthorityRatings(1).subscribe(
      (response) => {
        result = response;
      }
    );

    const request = httpMock.expectOne(expectedUrl);
    request.flush(testData);
    httpMock.verify();

    expect(result).toEqual(testData);
  });
});
