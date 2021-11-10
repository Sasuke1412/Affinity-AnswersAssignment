import {Component} from 'react'
import {Route, Switch, Redirect,BrowserRouter} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import ProductItemDetailsRoute from './components/ProductItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'
import CheckoutPageRoute from './components/CheckoutPageRoute'
import CartContext from './context/CartContext'
import PaymentRoute from './components/PaymentRoute'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList})
  }

  addCartItem = product => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]

      this.setState({cartList: updatedCartList})
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <BrowserRouter>
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
          
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetailsRoute}
            />
         
            <ProtectedRoute exact path="/payment" component={PaymentRoute} />
            <ProtectedRoute exact path="/check-out" component={CheckoutPageRoute} />
            <Route path="/not-found" component={NotFoundRoute} />
            <Redirect to="not-found" />
          </Switch>
      </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
