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
    },
     {
      notification:'100 buyers ready to buy',
    },
     {
      notification:'200 buyers ready to buy',
    },
    {
      notification:'4000 Farm Produce items are read for sale',
    },
    {
      notification:'600 buyers ready to buy',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
