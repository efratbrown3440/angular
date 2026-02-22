export class item{
    id: number;
    name: string;
    price: number;
    qty: number;

    constructor(id: number, name: string, price: number, qty: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}