import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger-service/messenger.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() productItem: Product

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

    handleAddToCart(){
      this.msg.sendMsg(this.productItem)
    }

    addTocart(product: Product){

    }
}
