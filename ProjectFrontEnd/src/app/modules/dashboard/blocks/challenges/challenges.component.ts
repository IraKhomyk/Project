import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  constructor() { }
images=[
  {url:'./../../../../assets/beauty.jpg'},
  {url:'./../../../../assets/beauty.jpg'},
  {url:'./../../../../assets/beauty.jpg'},
  {url:'./../../../../assets/beauty.jpg'},
  {url:'./../../../../assets/beauty.jpg'},
  {url:'./../../../../assets/beauty.jpg'},
  {url:'./../../../../assets/beauty.jpg'},
  {url:'./../../../../assets/beauty.jpg'},
  {url:'./../../../../assets/beauty.jpg'},

]
  
  ngOnInit(): void {
  }

}
