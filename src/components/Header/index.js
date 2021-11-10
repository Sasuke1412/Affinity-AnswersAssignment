import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactPopup from '../ReactPopup'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <p className="website-logo-design">Blah Blah.</p>
          </Link>
          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://res.cloudinary.com/ddw5fowln/image/upload/v1636498365/icon-log-out-img_ov0gvd.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>
        <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/check-out" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
            </Link>
          </li>
        </ul>
      </div>
        <div className="nav-bar-large-container">
          <Link to="/">
          <p className="website-logo-design">Blah Blah.</p>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
            <ReactPopup />             
            </li> 
          </ul>
            <div className="user-info-container">
              <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png" alt="" className="profile-picture" />
              <p>Welcome User</p>
            </div>
            <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
