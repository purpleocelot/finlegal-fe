import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

import { AuthoritySelectorComponent } from './authority-selector.component';
import { Authority } from '../../../core/models/authority';
import { AuthorityService } from '../../../core/services/authority.service';

describe('AuthoritySelectorComponent', () => {
  let component: AuthoritySelectorComponent;
  let fixture: ComponentFixture<AuthoritySelectorComponent>;
  let authorityServiceStub: Partial<AuthorityService>;
  authorityServiceStub = {
    list: [
      { id: 1, name: 'aaa' },
      { id: 2, name: 'bbb' },
      { id: 3, name: 'ccc' },
    ] as Authority[]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthoritySelectorComponent],
      providers: [{ provide: AuthorityService, useValue: authorityServiceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthoritySelectorComponent);
    component = fixture.componentInstance;
    spyOn(component, 'authorityChange').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output authorityId when selected', () => {
    let authorityId: number | undefined;
    component.selectedEvent
      .pipe(first())
      .subscribe((outputValue: number) => (authorityId = outputValue));

    let selectEl = fixture.debugElement.query(By.css('#authority')).nativeElement as HTMLSelectElement;
    selectEl.selectedIndex = 1;
    selectEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.authorityChange).toHaveBeenCalled();
    expect(authorityId).toBe(1);
  });
});
