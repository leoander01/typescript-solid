import { Messaging } from './services/messaging'
import { Persistency } from './services/persistency'
import { Order } from './classes/order'
import { Product } from './classes/product'
import { ShoppingCart } from './classes/shopping-cart'
import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './classes/discount'
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer'

// const fiftyPercentDiscount = new FiftyPercentDiscount()
// const tenPercentDiscount = new TenPercentDiscount()
const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer(
  'John',
  'Doe',
  '111.111.111-11',
)
const enterpriseCustomer = new EnterpriseCustomer('John', '111111111/1111')
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
)

shoppingCart.addItems(new Product('Camiseta', 49.91))
shoppingCart.addItems(new Product('Caderno', 9.9123))
shoppingCart.addItems(new Product('Lápis', 1.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
