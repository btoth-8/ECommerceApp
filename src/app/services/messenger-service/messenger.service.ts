import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  public cartItemList: any = [];

  subject = new Subject<Product>();

  constructor() {}

  sendMsg(product: Product) {
    this.subject.next(product); //Triggering product sending
  }

  getMsg() {
    return this.subject.asObservable(); //Returning product as observable from sendMsg function
  }

  //POSSIBILITY FOR REMOVING ITEMS FORM CART
  removeCartItem(product: Product) {
    let indexToRemove: number = -1;
    let index: number = 0;

    for (const cardItem of this.cartItemList) {
      if (product.id === cardItem.id) {
        indexToRemove = index;
      }

      index++;
    }

    if (indexToRemove !== -1) {
      this.cartItemList.splice(indexToRemove, 1);
    }
  }

  // ANOTHER POSSIBILITY FOR REMOVING CART ITEMS
  /*   removeCartItem(product: Product){
    let indexToRemove: number = 0;
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        indexToRemove = index;
      }
    });
    
    this.cartItemList.splice(indexToRemove,1); 
} */
}
