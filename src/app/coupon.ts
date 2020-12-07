export interface Coupon {
    id: number;
    name: string;
    discount: number;
}

export class Coupon {
    id = 0;
    name = '';
    discount = 0;
}
