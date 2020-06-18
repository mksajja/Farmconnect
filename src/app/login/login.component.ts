import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
   /* document.body.style.margin="0";
    document.body.style.padding="0";
    document.body.style.backgroundImage = "url('assets/images/loginbgimg.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
*/
    document.body.style.background="url('assets/images/restaurant.png')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.margin="0";
    document.body.style.padding="0";
    document.body.style.backgroundSize = "cover";
    /*document.body.style.minHeight="900px";*/
    document.body.style.fontFamily="Open Sans', sans-serif";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
    /*document.body.style.minHeight="";*/
    document.body.style.fontFamily="";
  }

  ngOnInit(): void {
  }

}
