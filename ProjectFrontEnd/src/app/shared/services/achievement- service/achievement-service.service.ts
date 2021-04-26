import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementServiceService {
  achievements = [
    { photoUrl: './../../../../assets/achiv1.jpg', name: 'Exoft turbo power', exp: "15 xp", date: '2021-02-23 11:43:37.9246959' },
    { photoUrl: './../../../../assets/achiv2.jpg', name: 'Exoft turbo power', exp: "15 xp", date: '2021-01-01 11:43:37.9246959' },
    { photoUrl: './../../../../assets/achiv3.jpg', name: 'Exoft corporate power', exp: "15 xp", date: '2021-04-23 11:43:37.9246959' },
    { photoUrl: './../../../../assets/achiv4.jpg', name: 'Exoft skylark power', exp: "15 xp", date: '2020-12-23 11:43:37.9246959' },
    { photoUrl: './../../../../assets/achiv5.jpg', name: 'Exoft turbo power', exp: "15 xp", date: '2021-04-23 11:43:37.9246959' },
    { photoUrl: './../../../../assets/achiv6.jpg', name: 'Exoft corporate power', exp: "15 xp", date: '2021-04-20 11:43:37.9246959' },
    { photoUrl: './../../../../assets/achiv7.jpg', name: 'Exoft skylark power', exp: "15 xp", date: '2021-04-10 11:43:37.9246959' },
    { photoUrl: './../../../../assets/achiv8.jpg', name: 'Exoft skylark power', exp: "15 xp", date: '2021-04-15 11:43:37.9246959' },
    { photoUrl: './../../../../assets/achiv9.jpg', name: 'Exoft skylark power', exp: "15 xp", date: '2021-04-18 11:43:37.9246959' },
  ];
}
