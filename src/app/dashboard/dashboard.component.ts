import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  dashboard;
  route;
  constructor() { }

  ngOnInit(): void {
    this.dashboard =true;
    // this.toggleSidebar();
    // this.openNav();
    // this.closeNav();
  }

  // toggleSidebar(){
  //   document.getElementById("sidebar").classList.toggle('active');
  // }

  //   openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("content").style.marginLeft = "250px";
  // }
  
  //  closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("content").style.marginLeft= "0";
  // }


  onFarmerPost(){
    this.dashboard = false;
    this.route = true;
  }




}


