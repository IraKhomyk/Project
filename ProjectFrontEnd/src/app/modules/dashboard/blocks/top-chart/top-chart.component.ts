import { Component, OnInit } from '@angular/core';
import { userWithAchievements } from 'src/app/models/userWithAchievements.model';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {

  public showInitials = false;
  public total = 0;
  public maxWidth = 580;

  public userWithAchiv: Array<userWithAchievements> = [
    { firstName: "Ira", lastName: "Khomyk", XP: 600, color: 'rgb(92, 198, 206)', size: '', photoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg' },
    { firstName: "Diana", lastName: "Demydko", XP: 250, color: 'rgb(196, 127, 184)', size: '', photoUrl: '' },
    { firstName: "Tanya", lastName: "Gogina", XP: 200, color: 'rgb(243, 159, 33)', size: '', photoUrl: '' },
    { firstName: "Khrystya", lastName: "Radchenko", XP: 100, color: 'rgb(33, 243, 215)', size: '', photoUrl: '' },
    { firstName: "Karen", lastName: "Sarkisyan", XP: 500, color: ' rgb(243, 81, 81)', size: '', photoUrl: '' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.createGrafic();
  }

  public createGrafic() {
    this.userWithAchiv.forEach(element => {
      this.total += element.XP;
    });

    this.userWithAchiv.forEach(element => {
      element.size = Math.round((element.XP * this.maxWidth) / this.total) + '%';
    });
  }

}


