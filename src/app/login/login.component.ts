import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    document.body.style.margin="0";
    document.body.style.padding="0";
    document.body.style.backgroundImage = "url('assets/images/loginbgimg.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

  ngOnInit(): void {
  }

}
