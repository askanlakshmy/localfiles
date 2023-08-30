import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apollo_portal';
  ngOnInit(): void {
    new Splide('#splide', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      pagination: false,
    }).mount();
  }
}
