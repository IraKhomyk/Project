import { TestBed } from '@angular/core/testing';

import { UserAchievementsService } from './user-achievements.service';

describe('UserAchievementsService', () => {
  let service: UserAchievementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAchievementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
