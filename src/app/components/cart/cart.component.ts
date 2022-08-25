import { FinalizeDialogComponent } from './finalize-dialog/finalize-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger-service/messenger.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  cartTotal = 0;

  product: any;

  constructor(private msg: MessengerService, public dialog: MatDialog) {}

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      //Subscribing to observable
      this.addProductToCart(product);
    });
  }

  // ADDING PRODUCTS TO CART
  addProductToCart(product: Product) {
    let productExists = false;
    //ONLY INCREASING THE QTY IF PRODUCT IS ALREADY IN THE CART
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    //ADDING THE PRODUCT TO CART IF IT'S NOT IN THE CART YET
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        description: product.description,
        qty: 1,
        price: product.price,
        imageUrl: product.imageUrl,
        purchased: product.purchased,
      });
    }
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }

  // CHANGING PURCHASED PROPERTY TO TRUE FOR DISABLED PURCHASE BUTTON
  purchaseDisabled() {
    if (this.product.purchased.valueOf() === 'false') {
      console.log(this.product.purchased);
      this.product.purchased = true;
    }
  }
  //DIALOG FOR END OF PURCHASE
  endOfPurchase() {
    this.dialog.open(FinalizeDialogComponent);
  }
}
