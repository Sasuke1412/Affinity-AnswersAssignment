import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import 'reactjs-popup/dist/index.css'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const ReactPopUp = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsCount = cartList.length
      const renderCartItemsCount = () => (
        <>
          {cartItemsCount > 0 ? (
            <span className="cart-count-badge">{cartList.length}</span>
          ) : null}
        </>
      )

      return(
        <div className="popup-container">
          <Popup
            trigger={
              <button className="trigger-button" type="button">
                Cart 
                {renderCartItemsCount()}
              </button>
            }
          >
            <div className="popup-cart-display">
              {cartItemsCount===0 ?  <>
                <EmptyCartView/> 
              </>  : <>
                <CartListView />
              </>}
            </div>
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default ReactPopUp