import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  dialogData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogData = data.x;
  }

  ngOnInit(): void {}
}
