import { OrderProducts, Product, Order } from "@prisma/client";

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number,
    subtotal: number
}

export type OrderWidthProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}