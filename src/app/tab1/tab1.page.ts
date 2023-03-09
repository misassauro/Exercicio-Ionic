import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  option = {
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    autoplay: true,
  }

}
