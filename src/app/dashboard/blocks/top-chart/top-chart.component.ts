import { Component, Input, OnInit } from '@angular/core';
import { GraficoModel } from 'src/app/models/grafico.model';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {


  public Animals: Array<GraficoModel> = [
    { firstName: "Ira", lastName: "Khomyk", XP: 350, Color: '#498B94', Size: '' },
    { firstName: "Diana", lastName: "Demydko", XP: 2000, Color: '#F8C622', Size: '' },
    { firstName: "Tanya", lastName: "Goida", XP: 1000, Color: '#747474', Size: '' },
    { firstName: "Khrystya", lastName: "Radchenko", XP: 500, Color: '#EC972D', Size: '' },
    { firstName: "Karen", lastName: "Sarkisyan", XP: 500, Color: '#EC972D', Size: '' },

  ];

  public Total = 0;
  public MaxWidth = 160;

  constructor() { }


  ngOnInit(): void {
    this.MontarGrafico();
  }

  MontarGrafico() {
    this.Animals.forEach(element => {
      this.Total += element.XP;
    });

    this.Animals.forEach(element => {
      element.Size = Math.round((element.XP * this.MaxWidth) / this.Total) + '%';
    });
  }
}


