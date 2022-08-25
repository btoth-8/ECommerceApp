import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Test Product A',
      'The Test Product A is an in-browser interface that lets you create visual mock-ups of search ads. It follows the same formatting guidelines as the search ads network, so you can see exactly how your ad will look in the search engine results pages. ',
      350,
      'assets/images/1.png'
    ),
    new Product(
      2,
      'Test Product B',
      ' The Test Product B is an ad preview tool that’s made specifically for expanded ad formats. The concept behind this tool is that you can quickly and easily create a mock-up of your ad concept and share it with your client or boss. ',
      180,
      'assets/images/2.png'
    ),
    new Product(
      3,
      'Test Product C',
      ' Test Product C is a genuine ad copy generator. The tool collects basic information from you, such as the name of your product and your target market, then transforms it into a list of text ad copy variations that you can use for your PPC campaign.',
      500,
      'assets/images/3.png'
    ),
  ];

  constructor() {}

  //Returns an array of products
  getProducts(): Product[] {
    return this.products;
  }

  //Returns only one product according to their id
  getProductDetails(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
