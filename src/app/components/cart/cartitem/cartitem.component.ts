import { ConfirmationDialogComponent } from './../confirmation-dialog/confirmation-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger-service/messenger.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css'],
})
export class CartitemComponent implements OnInit {
  @Input() cartItem: any;

  item: any;

  constructor(public dialog: MatDialog, public service: MessengerService) {}

  ngOnInit(): void {}

  confirmationDialog() {
    this.dialog.open(ConfirmationDialogComponent);
  }

  removeItem(item: Product) {
    this.service.removeCartItem(item);
  }
}
