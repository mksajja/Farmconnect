import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';

interface DocumentType {
  name: string;
}
interface Crop{
  name: string;
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {

  basicDataFormGroup:FormGroup;
  roleFormGroup:FormGroup;
  listDataFormGroup:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.basicDataFormGroup = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required,Validators.email],
      street:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pinCode:['',Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      documentType:['',Validators.required],
      documentNumber:['',Validators.required],
      licenseInfo:['',Validators.required],

    })

    this.roleFormGroup = this.fb.group({
      role:['',Validators.required]
    })
    this.listDataFormGroup=this.fb.group({
      crop:['',Validators.required],
    })
  }
email = new FormControl('', [Validators.required, Validators.email]);
documentType = new FormControl('', Validators.required);
crop = new FormControl('',Validators.required);
farmerDocuments: DocumentType[] = [
  {name: 'Pancard'},
  {name: 'Passbook'},
];
buyerDocuments: DocumentType[] = [
  {name: 'Pancard'},
  {name: 'APMC'},
];
crops: Crop[] = [
  {name:'Tomato'},
  {name:'Mango'},
];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get f(){
    return this.basicDataFormGroup.controls;
  }

  submit(){
    console.log(this.basicDataFormGroup.value);
  }



}
