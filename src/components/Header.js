import React from 'react'
import logo from 'img/winHubLogo1.png';
import {Link} from 'react-router-dom'
import CartCount from 'components/CartCount'
import FaviCount from 'components/FaviCount'

const Header = ({page_title}) => {

  console.log(page_title+" yesss it works in header")
  const pane = page_title ? page_title+" PAGE" : "PAGE TITLE"

  return (
    <header className="page-header">
        {/* <!-- Navigation menu and toggle button (non-functional) --> */}
        <button type="button" className="nav-toggle" name="menu button">
          {/* <!-- <span className="material-icons">menu</span> --> */}
          <i className="fa fa-bars fa-2x"></i>
        </button>   
        <div className="search-bar m-hide">       
          {/* <!-- Search for a product (non-functional) --> */}
          <form className="search">
            <label>
              <input type="search" name="find" id="find" placeholder="Search for Products..." className="find"/>
            </label>
            <button type="button"><i className="fa fa-search fa-2x"></i></button>
          </form>  
        </div>

        <div className="top-cart">
          {/* <!-- Additional links --> */}
          <ul className="header-cart">
            <li><a href="#"><i className="fa fa-user-circle fa-2x"></i></a></li>
            {/* <li><a href="#"><i className="fa far fa-heart fa-2x"></i></a></li> */}
            <Link to="/favorite"><FaviCount /></Link>
            {/* <li><a href="#"><i className="fa fas fa-shopping-cart fa-2x" aria-label="Items in your cart"></i></a></li> */}
            <Link to="/cart"><CartCount /></Link>
          </ul>
        </div>

        {/* <!-- LOGO --> */}
        <div className="logo">
          <Link to="/" rel="home" className="site-logo">
            <img src={logo} alt="WINE HUB."/>
            {/* <!-- Site logo --> */}
          </Link>
        </div>

        {/* <!-- Navigation menu -->       */}
        <nav aria-label="Primary" className="navigation  m-hide">
          <ul className="menu">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/">Shop</Link>
              <ul className="submenu">
                <li><Link to="/">Dessert Wine</Link></li>
                <li><Link to="/">Red Wine</Link></li>
                <li><Link href="/">Rose Wine</Link></li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

      {/* <!-- Page Title --> */}
      <div className="page-title">
        <h2>{pane}</h2>
      </div>
    </header>
  )
}

export default Header