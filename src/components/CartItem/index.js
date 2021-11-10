import {MdArrowDropUp, MdArrowDropDown} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      const totalPrice = price * quantity

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
          <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickIncrement}
              >
                <MdArrowDropUp color="#52606D" size={20} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickDecrement}
              >
                <MdArrowDropDown color="#52606D" size={20} />
              </button>
            </div>
            <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
            </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
