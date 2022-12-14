import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  //Validators for form
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

  /* SAVE DATA TO LOCALSTORAGE */
  formDialog() {
    this.formData = Object.assign(this.formData, this.contactForm.value);
    localStorage.setItem('Data', JSON.stringify(this.formData));
    console.log(this.contactForm.value);
    this.contactForm.reset();
    this.dialog.open(DialogComponent, {
      data: { x: localStorage.getItem('Data')! },
    });
  }
}
