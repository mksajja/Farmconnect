import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router:Router,
              private fb:FormBuilder,
              private commonService:CommonService) {
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
    this.loginForm = this.fb.group({
      userName: [''],
      password: [''],
    });
   
  }
  
  onLogin(value){
    console.log('loginForm',value);
    this.commonService.getProfiles().subscribe(res => {
      console.log('profiles',res);
      for(let i=0; i<res.length; i++){
         if(res[i].userName == value.userName){
          console.log('res[i].userName',res[i].userName);
          console.log('value.userName',value.userName);
          console.log('matched');
          this.router.navigateByUrl('/dashboard/old-farmer');
        }
      }
    })
    this.commonService.postProfile(value);
    this.router.navigateByUrl('/dashboard/new-farmer');
  }

}
