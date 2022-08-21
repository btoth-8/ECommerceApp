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
      this.addProductToCart(product);
    });
  }

  /* ADDING PRODUCT TO CART */
  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        description: product.description,
        qty: 1,
        price: product.price,
        imageUrl: product.imageUrl,
        purchased:product.purchased
      });
    }
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }

/* CHANGING PURCHASED PROPERTY TO TRUE FOR DISABLED PURCHASE BUTTON */
  purchaseDisabled(product:Product){
    this.product.purchased=true;
    console.log(product.purchased);
  }

}

 /*  finalizeDialog() {
    this.dialog.open(FinalizeDialogComponent);
  } */

/*  if (this.cartItems.length === 0) {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        description: product.description,
        qty: 1,
        price: product.price,
        imageUrl: product.imageUrl
      })
    } else {
      for (let i in this.cartItems) {
        if (this.cartItems[i].id === product.id) {
          this.cartItems[i].qty++
          break;
        } else {
          this.cartItems.push({
            id: product.id,
            name: product.name,
            description: product.description,
            qty: 1,
            price: product.price,
            imageUrl: product.imageUrl
          })
        }
      }
    } */

/* {id:1, productId:1, productName: 'Test product 1', qty: 4, price: 100},
   {id:2, productId:2, productName: 'Test product 2', qty: 2, price: 100},
   {id:3, productId:3, productName: 'Test product 3', qty: 1, price: 100},
   {id:4, productId:4, productName: 'Test product 4', qty: 5, price: 100}, */

/*  this.cartItems.forEach(item =>{
     this.cartTotal += (item.qty * item.price)
   })  */
