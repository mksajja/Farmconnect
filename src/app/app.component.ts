import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  searchForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder,
              private commonService:CommonService){}

  ngOnInit(){
    this.searchForm = this.fb.group({
      category: [''],
      product: [''],
      location: [''],
      distance: ['']
    })
  }
  onSearch(){
    console.log('searchForm Controls',this.searchForm.value);
    this.commonService.search(this.searchForm.value).subscribe(
      response => console.log('Success!', response),
      error =>console.log('Error!', error)
    );
  }
}
