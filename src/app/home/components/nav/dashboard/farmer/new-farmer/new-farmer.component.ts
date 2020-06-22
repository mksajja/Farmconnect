import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-farmer',
  templateUrl: './new-farmer.component.html',
  styleUrls: ['./new-farmer.component.css']
})
export class NewFarmerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onFarmerPost(){
    this.router.navigateByUrl('dashboard/farmerpost-form');
  }

}
