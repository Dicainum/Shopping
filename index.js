const shoppingCart = {
  items: [],
  total: 0,
  addItem(name, price, quantity) {
    this.items.push(name)
    this.total += price * quantity
    return this
  },
  removeItem(name) {
    this.items.pop(name)
    this.total -= name.price * name.quantity
    return this
  },
  updateQuantity(name, updatedQuantity) {
    this.total -= name.price * name.quantity
    name.quantity = updatedQuantity
    this.total += name.price * name.updatedQuantity
    return this
  },
  calculateTotal() {
    let total = 0
    for (const item of this.items) {
      total += item.price * item.quantity
    }
    this.total = total
    console.log(this.total)
    return this
  },
  clearCart() {
    this.items = []
    this.total = 0
    return this
  }
}

const tomato = {
  name: 'tomato',
  price: 2,
  quantity: 10
}


shoppingCart.addItem(tomato).addItem(tomato).calculateTotal()  .removeItem(tomato).calculateTotal()  .updateQuantity(tomato, 1).calculateTotal()  .clearCart().calculateTotal();
