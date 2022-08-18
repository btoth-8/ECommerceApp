import { MessengerService } from 'src/app/services/messenger-service/messenger.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  productItem!: Product; 

  detailsList: any /* Product[] = [] */

  constructor(private productDetailsService: ProductService, private route: ActivatedRoute, private msg: MessengerService) { }

  ngOnInit(): void {

    const id= +this.route.snapshot.params['id'];
    this.detailsList = this.productDetailsService.getProductDetails(id);
       
     }

     /* handleAddToCart(){
      this.msg.sendMsg(this.productItem)
    } */
  }


