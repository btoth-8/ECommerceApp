import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger-service/messenger.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  item: any
  constructor(public service: MessengerService) { }

  ngOnInit(): void {
  }
  /* removeItem(item: Product){
    this.service.removeCartItem(item);
  } */
}
