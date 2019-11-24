import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsItemComponent } from './achievements-item.component';

describe('AchievementsItemComponent', () => {
  let component: AchievementsItemComponent;
  let fixture: ComponentFixture<AchievementsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
