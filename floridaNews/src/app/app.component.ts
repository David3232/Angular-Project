import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'floridaNews';
  public imagesUrl;

  ngOnInit() {
      this.imagesUrl = [
      '../assets/img/julen.jpg',
      '../assets/img/Julio.jpg',
      '../assets/img/Robin.jpg',
      ];
  }
}

