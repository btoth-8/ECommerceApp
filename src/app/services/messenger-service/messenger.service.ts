import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { Product } from 'src/app/models/product';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  /* public cartItemList: any =[] */

  subject = new Subject<Product>()
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  sendMsg(product: Product){
    this.subject.next(product)
  }

  getMsg(){
    return this.subject.asObservable()
  }
  
/*   removeCartItem(product: Product){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1); 
      }
    })
  }

  removeAll(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  } */
}
