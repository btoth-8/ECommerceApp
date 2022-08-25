export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    qty: number;
    purchased: boolean;


    constructor(id: number, name:string, description='', price= 0, imageUrl='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',  qty= 1, purchased=false){
        this.id= id
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
        this.qty=qty
        this.purchased=purchased
    }
}
