import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalResumeComponent } from './final-resume.component';

describe('FinalResumeComponent', () => {
  let component: FinalResumeComponent;
  let fixture: ComponentFixture<FinalResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
