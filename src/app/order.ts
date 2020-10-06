export class Order {
    email = '';
    phoneNumber = '';
    price = 0;
    location = null;
    orderProducts: OrderProduct[] = [];
}

export class OrderProduct {
    private name: string;
    private price: number;
    private removedIngredients: string;

    constructor(name: string, price: number, removedIngredients: string) {
        this.name = name;
        this.price = price;
        this.price.toPrecision(3);
        this.removedIngredients = removedIngredients;
    }
}
