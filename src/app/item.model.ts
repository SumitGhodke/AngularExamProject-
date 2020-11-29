

export class Item {
    itemName: number
    quantity: number
    price: number
    description: string

    constructor(item: number, quantity: number, price: number, description: string) {
        this.itemName = item
        this.quantity = quantity
        this.price = price

        this.description = description
    }
}