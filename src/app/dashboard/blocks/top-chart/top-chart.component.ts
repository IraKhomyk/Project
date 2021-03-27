import { Component, Input, OnInit } from '@angular/core';
import { GraficoModel } from 'src/app/models/grafico.model';
import { UserInf } from 'src/app/models/icon-user.model';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {

  public showInitials = false;
  public initials: string;
  public circleColor: string;

  private colors = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2',
  ]

  public user: UserInf = { name: "Ira Khomyk", photoUrl: "" };


  public Total = 0;
  public MaxWidth = 580;

  public UserEchiv: Array<GraficoModel> = [
    { firstName: "Ira", lastName: "Khomyk", XP: 115, Color: 'rgb(92, 198, 206)', Size: '' },
    { firstName: "Diana", lastName: "Demydko", XP: 250, Color: 'rgb(196, 127, 184)', Size: '' },
    { firstName: "Tanya", lastName: "Goida", XP: 200, Color: 'rgb(243, 159, 33)', Size: '' },
    { firstName: "Khrystya", lastName: "Radchenko", XP: 100, Color: 'rgb(33, 243, 215)', Size: '' },
    { firstName: "Karen", lastName: "Sarkisyan", XP: 500, Color: ' rgb(243, 81, 81)', Size: '' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.MontarGrafico();

    if (!this.user.photoUrl) {
      this.showInitials = true;
      this.createInitials();

      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.circleColor = this.colors[randomIndex];
    }


  }

  MontarGrafico() {
    this.UserEchiv.forEach(element => {
      this.Total += element.XP;
    });

    this.UserEchiv.forEach(element => {
      element.Size = Math.round((element.XP * this.MaxWidth) / this.Total) + '%';
    });
  }
  public createInitials(): void {
    let initials = "";
      for (let i = 0; i < this.user.name.length; i++) {
        if (this.user.name.charAt(i) === ' ') {
          continue;
        }

        if (this.user.name.charAt(i) === this.user.name.charAt(i).toUpperCase()) {
          initials += this.user.name.charAt(i);

          if (initials.length == 2) {
            break;
          }
        }
      }
    this.initials = initials;
  }
}


