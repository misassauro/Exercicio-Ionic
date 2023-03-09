import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  option = {
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    // autoplay: true,
  }

}
