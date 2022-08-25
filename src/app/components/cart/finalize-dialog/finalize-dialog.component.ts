import { SuccessDialogComponent } from 'src/app/components/cart/success-dialog/success-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-finalize-dialog',
  templateUrl: './finalize-dialog.component.html',
  styleUrls: ['./finalize-dialog.component.css'],
})
export class FinalizeDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  successDialog() {
    this.dialog.open(SuccessDialogComponent);
  }
}
