import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RatingsTableComponent } from './ratings-table.component';
import { AuthorityRating } from '../../../core/models/authority-rating';
import { DataService } from '../../../core/services/data.service';

describe('RatingsTableComponent', () => {
  let component: RatingsTableComponent;
  let fixture: ComponentFixture<RatingsTableComponent>;

  const testData = [
    { name: '1', tally: 11, value: 11.1 },
    { name: '2', tally: 22, value: 22.2 },
    { name: '3', tally: 33, value: 33.3 },
  ] as AuthorityRating[];

  let dataServiceStub: Partial<DataService>;
  dataServiceStub = {
    getAuthorityRatings: (x) => of(testData)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingsTableComponent],
      providers: [{ provide: DataService, useValue: dataServiceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set ratings to empty array when "please select" option is chosen', () => {
    component.authorityId = -1;
    expect(component.ratings).toEqual([]);
  });

  it('should update the ratings and total when an authority is chosen', () => {
    component.authorityId = 1;
    expect(component.ratings).toEqual(testData);
    expect(component.total).toBe(66);
  });
});
