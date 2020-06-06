import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {CommonService} from "../common.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private commonService:CommonService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      category: [''],
      product: [''],
      location: [''],
      distance: ['']
    })
  }
  onSearch(){
    console.log('searchForm Controls',this.searchForm.value);
    console.log('form.category',this.searchForm.value.category);
    this.commonService.search(this.searchForm.value).subscribe(
      response => console.log('Success!', response),
      error =>console.log('Error!', error)
    );
   this.commonService.editSearch(this.searchForm.value.category); 
  }
}
