import {Link} from 'react-router-dom'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <div className="cart-list-view">
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
        <Link to="/check-out" className="redirect-to-checkout">
        <button type="button" className="redirect-to-checkout-button-design">
          Checkout
        </button>
        </Link>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
