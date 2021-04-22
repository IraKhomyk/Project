import { Injectable } from '@angular/core';
import { UserWithAchievements } from '../../models/user-with-achievements.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: Array<User> = [
    {
      firstName: 'Ira',
      lastName: 'Khomyk',
      email: 'ira@gmail.com',
      password: 'ira!2345',
      status: ':)',
      photoUrl: './../../../../assets/myphoto.jpg',
      badges: 6,
      exp: 220,
    },
    {
      firstName: 'Dima',
      lastName: 'Khomyk',
      email: 'dima@gmail.com',
      password: 'dima!2345',
      status: ':)',
      photoUrl: '',
      badges: 6,
      exp: 450,
    },
    {
      firstName: 'Tanya',
      lastName: 'Gogina',
      email: 'tanya@gmail.com',
      password: 'tanya!2345',
      status: ':)',
      photoUrl: '',
      badges: 6,
      exp: 100,
    },
    {
      firstName: 'Diana',
      lastName: 'Demydko',
      email: 'diana@gmail.com',
      password: 'diana!2345',
      status: ':)',
      photoUrl: '',
      badges: 6,
      exp: 120,
    },
    {
      firstName: 'Khrystya',
      lastName: 'Radchenko',
      email: 'khrystya@gmail.com',
      password: 'ira!2345',
      status: ':)',
      photoUrl: '',
      badges: 6,
      exp: 100,
    },
    {
      firstName: 'Karen',
      lastName: 'Sarkisyan',
      email: 'karen@gmail.com',
      password: 'karen!2345',
      status: ':)',
      photoUrl: '',
      badges: 6,
      exp: 100,
    },
    {
      firstName: 'Ostap',
      lastName: 'Roik',
      email: 'ostap@gmail.com',
      password: 'ostap!2345',
      status: ':)',
      photoUrl: '',
      badges: 6,
      exp: 310,
    },
    {
      firstName: 'Taras',
      lastName: 'Sava',
      email: 'taras@gmail.com',
      password: 'taras!2345',
      status: ':)',
      photoUrl: '',
      badges: 6,
      exp: 130,
    },
  ]

  usersWithAchivements: Array<UserWithAchievements> = [
    { firstName: "Ira", lastName: "Khomyk", xp: 600, color: 'rgb(92, 198, 206)', size: '', photoUrl: './../../../../assets/myphoto.jpg' },
    { firstName: "Diana", lastName: "Demydko", xp: 250, color: 'rgb(196, 127, 184)', size: '', photoUrl: '' },
    { firstName: "Tanya", lastName: "Gogina", xp: 200, color: 'rgb(243, 159, 33)', size: '', photoUrl: '' },
    { firstName: "Khrystya", lastName: "Radchenko", xp: 100, color: 'rgb(33, 243, 215)', size: '', photoUrl: '' },
    { firstName: "Karen", lastName: "Sarkisyan", xp: 500, color: ' rgb(243, 81, 81)', size: '', photoUrl: '' },
  ];

}
