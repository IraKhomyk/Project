import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementServiceService {
  achievements = [
    { photoUrl: './../../../../assets/achiv1.jpg', name: 'Exoft turbo power', exp: "15 xp" },
    { photoUrl: './../../../../assets/achiv2.jpg', name: 'Exoft turbo power', exp: "15 xp" },
    { photoUrl: './../../../../assets/achiv3.jpg', name: 'Exoft corporate power', exp: "15 xp" },
    { photoUrl: './../../../../assets/achiv4.jpg', name: 'Exoft skylark power', exp: "15 xp" },
    { photoUrl: './../../../../assets/achiv5.jpg', name: 'Exoft turbo power', exp: "15 xp" },
    { photoUrl: './../../../../assets/achiv6.jpg', name: 'Exoft corporate power', exp: "15 xp" },
    { photoUrl: './../../../../assets/achiv7.jpg', name: 'Exoft skylark power', exp: "15 xp" },
    { photoUrl: './../../../../assets/achiv8.jpg', name: 'Exoft skylark power', exp: "15 xp" },
    { photoUrl: './../../../../assets/achiv9.jpg', name: 'Exoft skylark power', exp: "15 xp" },
  ];
}
