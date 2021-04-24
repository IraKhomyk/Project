import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveMessaggeComponent } from './leave-messagge.component';

describe('LeaveMessaggeComponent', () => {
  let component: LeaveMessaggeComponent;
  let fixture: ComponentFixture<LeaveMessaggeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveMessaggeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveMessaggeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
