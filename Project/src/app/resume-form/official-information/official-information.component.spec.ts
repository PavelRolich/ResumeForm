import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialInformationComponent } from './official-information.component';

describe('OfficialInformationComponent', () => {
  let component: OfficialInformationComponent;
  let fixture: ComponentFixture<OfficialInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
