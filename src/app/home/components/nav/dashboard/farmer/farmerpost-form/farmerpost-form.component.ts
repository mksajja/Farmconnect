import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerpost-form',
  templateUrl: './farmerpost-form.component.html',
  styleUrls: ['./farmerpost-form.component.css']
})
export class FarmerpostFormComponent implements OnInit {

  constructor(private commonService:CommonService,
              private router:Router) { }

  ngOnInit(): void {
  }
  onPost(){
    this.router.navigateByUrl('dashboard/post-details');
  }
}
