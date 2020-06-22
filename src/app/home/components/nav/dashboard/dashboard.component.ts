import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  new;
  old;
  route;
  postDetails;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.new =true;
    // this.commonService.routeoption$.subscribe(
    //   res => {
    //     if(res==true){
    //       this.route = false;
    //       this.old = false;
    //       this.new = false;
    //      }
    //     else {
    //       this.route = false;
    //     }
    //     console.log('routeOption',res);
    //   }
      
    // )

    
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


  // onFarmerPost(){
  //   this.new = false;
  //   this.old = false;
  //   this.route = true;
  //   this.postDetails = false;
  // }





}


