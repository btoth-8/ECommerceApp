import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public formData:any[]) {}

  

  ngOnInit(): void {
    
  }
  getData() {
    return localStorage.getItem('formData')
    /* console.log(localStorage.getItem('formData')) */
   /*  console.log(this.formData, JSON.stringify(localStorage.getItem('Data') */
 }
  
}
