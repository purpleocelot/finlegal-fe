import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuthorityService } from './core/services/authority.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const authorityService = jasmine.createSpyObj('AuthorityService', ['loadData']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: AuthorityService, useValue: authorityService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Food Standards Agency Summarizer');
  });

  it('should load the authorities upon app launch', () => {
    expect(authorityService.loadData).toHaveBeenCalled();
  });
});
