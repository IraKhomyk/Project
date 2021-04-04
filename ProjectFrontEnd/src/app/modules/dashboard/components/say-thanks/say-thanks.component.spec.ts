import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayThanksComponent } from './say-thanks.component';

describe('SayThanksComponent', () => {
  let component: SayThanksComponent;
  let fixture: ComponentFixture<SayThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayThanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
