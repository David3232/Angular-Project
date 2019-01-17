import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'latest-news',
  templateUrl: './latetst-news.component.html',
  styleUrls: ['./latetst-news.component.css']
})
export class LatetstNewsComponent implements OnInit {
  @Input() avatars = [];
  avatars2 = [];
  index = 0;
  constructor() { }

  ngOnInit() {
    setInterval( ()=>{

      console.log('Hola');

    this.index = (this.index+1)%this.avatars.lenght;
    }, 3000);
      console.log(this.index);
}


}
