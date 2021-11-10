import CartContext from '../../context/CartContext'

import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CheckoutCartListView  from '../CheckoutCartListView'
import CartSummary from '../CartSummary'

import './index.css'

const CheckoutPageRoute = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>
                <CheckoutCartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CheckoutPageRoute
