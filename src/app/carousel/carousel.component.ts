import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  notify_list = [
    {
      notification:'8000 Farm Produce items are read for sale',
     // img:'https://picsum.photos/900/500?random&t=6'
    },
     {
      notification:'100 buyers ready to buy',
     // img:'https://picsum.photos/900/500?random&t=1'
    },
     {
      notification:'200 buyers ready to buy',
      //img:'https://picsum.photos/900/500?random&t=3'
    },
    {
      notification:'4000 Farm Produce items are read for sale',
      //img: 'https://picsum.photos/900/500?random&t=4'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
