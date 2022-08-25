import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger-service/messenger.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() productItem: Product;

  buttonDisabled: boolean;

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {
    this.buttonDisabled = false;
    this.productItem != null;
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem); //Sending one product with messenger service, called by clicking on Purchase button
  }

  /* DISABLE BUTTON IF PURCHASED PROPERTY IS TRUE */
  /*  purchasedProduct() {
    if (this.productItem?.purchased.valueOf()===true) {
      this.buttonDisabled=true;
    }
  } */

  /* ANOTHER SOLUTION FOR DISABLING BUTTON */
  /* checkPurchased(producItem: Product){
    if(this.productItem.includes(this.productItem.purchased===true))
    {
    }} */
}
