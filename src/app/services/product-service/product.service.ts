import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Mozaic', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum sodales euismod. Fusce molestie tellus elit, maximus suscipit leo iaculis eu. Integer ut justo tellus. Pellentesque sem libero, sollicitudin at semper sed, porttitor nec erat. ', 200, 'assets/images/mozaic.png' ),
    new Product(2, 'Purple fog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum sodales euismod. Fusce molestie tellus elit, maximus suscipit leo iaculis eu. Integer ut justo tellus. Pellentesque sem libero, sollicitudin at semper sed, porttitor nec erat. ', 300, 'assets/images/fog.png'),
    new Product(3, 'Wave', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum sodales euismod. Fusce molestie tellus elit, maximus suscipit leo iaculis eu. Integer ut justo tellus. Pellentesque sem libero, sollicitudin at semper sed, porttitor nec erat. ', 500, 'assets/images/wave.png'),
    /*  new Product(4, 'Wave', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum sodales euismod. Fusce molestie tellus elit, maximus suscipit leo iaculis eu. Integer ut justo tellus. Pellentesque sem libero, sollicitudin at semper sed, porttitor nec erat. ', 500, 'assets/images/wave.png'),*/

  ]

  constructor() { }

  getProducts(): Product[]{
    return this.products
  }

  getProductDetails(id:number){
    return this.products.find(product=>
      product.id === id);
  }

  
}
