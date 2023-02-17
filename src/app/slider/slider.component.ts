import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
 
  customOptions: OwlOptions = {
    loop: true,
    margin:100,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    dotsEach:1,
    navSpeed: 2000,
    autoplay: true,
    nav:true,
    navText:["previous","nex"],
    
    
    
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
