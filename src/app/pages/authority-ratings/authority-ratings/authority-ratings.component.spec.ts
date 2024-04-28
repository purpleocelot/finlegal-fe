import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthorityRatingsComponent } from './authority-ratings.component';
import { AuthoritySelectorComponent } from '../authority-selector/authority-selector.component';
import { RatingsTableComponent } from '../ratings-table/ratings-table.component';

@Component({
  selector: 'app-authority-selector',
  template: '',
  standalone: true,
})
export class AuthoritySelectorMock {
  @Output() selectedEvent = new EventEmitter<number>();

  authorityChange(authorityId: number): void {
    this.selectedEvent.emit(authorityId);
  }
}

@Component({
  selector: 'app-ratings-table',
  template: '',
  standalone: true,
})
export class RatingsTableMock {
  @Input() authorityId: number = 0;
}

describe('AuthorityRatingsComponent', () => {
  let component: AuthorityRatingsComponent;
  let fixture: ComponentFixture<AuthorityRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AuthorityRatingsComponent
      ]
    })
    .overrideComponent(AuthorityRatingsComponent, {
      remove: { imports: [ AuthoritySelectorComponent ] },
      add: { imports: [ AuthoritySelectorMock ] }
    })
    .overrideComponent(AuthorityRatingsComponent, {
      remove: { imports: [ RatingsTableComponent ] },
      add: { imports: [ RatingsTableMock ] }
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorityRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the authorityId when an authority is selected', () => {
    component.authoritySelected(123);
    expect(component.authorityId).toBe(123);
  });
});
