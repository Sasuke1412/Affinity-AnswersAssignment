import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'

const IndividualProductCard = props => (
  <CartContext.Consumer>
    {value => {
      const {
        addCartItem
      } = value
  const {productDataItem} = props
  const {title, brand, imageUrl, rating, price, id} = productDataItem
  const quantity=1

  const onClickAddToCartItem=()=>{
    addCartItem({...productDataItem, quantity})
  }

  return (
    <div className="item-design">
    <Link to={`/products/${id}`} className="link-item">
      <li className="product-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs. {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://res.cloudinary.com/ddw5fowln/image/upload/v1636496772/star-img_jbfqsq.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
    </Link>
    <button type="button" className="add-to-cart-button"  onClick={onClickAddToCartItem}>Add to Cart</button>
    </div>
  )
}}
</CartContext.Consumer>
)

export default IndividualProductCard