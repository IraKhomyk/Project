import { Pipe, PipeTransform } from '@angular/core';
import { userWithAchievements } from '../../../models/user-with-achievements.model';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(user: userWithAchievements): string {
    let initials = '';

    initials = user.firstName.charAt(0) + user.lastName.charAt(0);

    return initials.toUpperCase();
  }
}
