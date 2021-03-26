import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEchievementsComponent } from './personal-echievements.component';

describe('PersonalEchievementsComponent', () => {
  let component: PersonalEchievementsComponent;
  let fixture: ComponentFixture<PersonalEchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalEchievementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
