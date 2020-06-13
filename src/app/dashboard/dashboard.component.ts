import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.toggleSidebar();
    this.openNav();
    this.closeNav();
  }

  // toggleSidebar(){
  //   document.getElementById("sidebar").classList.toggle('active');
  // }

    openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").style.marginLeft= "0";
  }
}
