import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-farmer-edit',
  templateUrl: './farmer-edit.component.html',
  styleUrls: ['./farmer-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FarmerEditComponent implements OnInit {
  elementData;
  constructor(   public dialogRef: MatDialogRef<FarmerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log('data',data);
      this.elementData = data;
      console.log('elementData',this.elementData); 
    }

  ngOnInit(): void {
    
  }
  closeFarmerEdit(){
    this.dialogRef.close();
  }

}
