import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-topic',
  templateUrl: './change-topic.component.html',
  styleUrls: ['./change-topic.component.css']
})
export class ChangeTopicComponent implements OnInit {
  title: string = 'Podria interesarte: ';
  topic: string = 'economy';
  imgSports: string = "../../assets/img/Julio.jpg";
  imgEconomy: string = "../../assets/img/Robin.jpg";
  imgCulture: string = "../../assets/img/julen.jpg";

  changeTopic() {
    if (this.topic === 'economy') {
      this.topic = 'sports';
    }  else if (this.topic === 'sports') {
      this.topic = 'culture';
    } else if (this.topic === 'culture')  {
      this.topic = 'economy';
    }
  }

  ngOnInit() {

  }


}
