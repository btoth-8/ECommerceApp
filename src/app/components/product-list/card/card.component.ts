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
    this.msg.sendMsg(this.productItem);
  }

  /* DISABLE BUTTON IF PURCHASED PROPERTY IS TRUE */
  purchasedProduct(productItem: Product) {
    if (this.productItem.purchased === true) {
      this.buttonDisabled = true;
    }
  }

  /* checkPurchased(producItem: Product){
    if(this.productItem.includes(this.productItem.purchased===true))
    {
    
    }} */
}
