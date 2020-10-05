import { Product } from './product';

export interface Comment {
    id?: number;
    comment?: string;
    productId?: number;
}

export class CommentRequest {
    comment?: string = "";
}
