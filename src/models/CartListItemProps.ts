interface Product {
    id: string;
    image: string;
    name: string;
    price: number;
}
interface CartItem {
    product: Product;
    size: number;
    quantity: number;
}

export interface CartListItemProps {
    cartItem: CartItem;

}