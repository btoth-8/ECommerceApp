import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', [Validators.maxLength(500), Validators.required]),
  });

  constructor(public dialog: MatDialog, private modalService: NgbModal) {}

  ngOnInit(): void {}

  userData: any;
  public formData: any = {};

  get name() {
    return this.contactForm.get('name') as FormControl;
  }
  get email() {
    return this.contactForm.get('email') as FormControl;
  }
  get text() {
    return this.contactForm.get('text') as FormControl;
  }
  /* SAVE DATA TO LOCALSTORAGE, MODAL */
  formDialog() {
    this.formData = Object.assign(this.formData, this.contactForm.value);
    localStorage.setItem('Data', JSON.stringify(this.formData));
    console.log(this.contactForm.value);
    this.contactForm.reset();
    this.modalService.open(JSON.stringify(localStorage.getItem('Data')!));
  }

  unique() {
    /* this.formData=Object.assign(this.formData, this.contactForm.value.name)
  localStorage.setItem('name', JSON.stringify(this.formData))  
  this.formData=Object.assign(this.formData, this.contactForm.value.email)
  localStorage.setItem('email', JSON.stringify(this.formData))  
  this.formData=Object.assign(this.formData, this.contactForm.value.text)
  localStorage.setItem('text', JSON.stringify(this.formData))  
      console.log(this.contactForm.value.name); 
      console.log(this.contactForm.value.email); 
      console.log(this.contactForm.value.text); 
      this.contactForm.reset(); */
  }
  open() {
    /*      this.userData = this.modalService.open(JSON.stringify(localStorage.getItem('Data')!))
     */
    /*    this.userName=this.modalService.open(localStorage.getItem('name'));
     */
    /* this.userEmail=this.modalService.open(localStorage.getItem('email'));  */
    /* this.userText=this.modalService.open(localStorage.getItem('text'));  */
    /*     console.log(localStorage.getItem('name')) */
  }
}
/* localStorage.setItem('name', JSON.stringify(this.name));
      localStorage.setItem('email', JSON.stringify(this.email));
      localStorage.setItem('text', JSON.stringify(this.text));
      console.log(this.email, this.name, this.text) */
