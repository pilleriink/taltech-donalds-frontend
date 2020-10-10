export class Order {
    email = '';
    price = 0;
    location = null;
    orderProducts: OrderProduct[] = [];
    orderMeals: OrderMeal[] = [];
}

export class OrderProduct {
    private name: string;
    private price: number;
    private removedIngredients: string;

    constructor(name: string, price: number, removedIngredients: string) {
        this.name = name;
        this.price = price;
        this.removedIngredients = removedIngredients;
    }
}

export class OrderMeal {
    private name: string;
    private price: number;
    private orderProducts: OrderProduct[] = [];

    constructor(name: string, price: number, products: OrderProduct[]) {
        this.name = name;
        this.price = price;
        this.orderProducts = products;
    }
}
