import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://res.cloudinary.com/ddw5fowln/image/upload/v1636497848/empty-cart-img_cfs7xz.png"
      className="cart-empty-image"
      alt="cart empty"
    />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>
  </div>
)

export default EmptyCartView
