import React from 'react'
import logo from 'img/winHubLogo1.png';

const Header = () => {

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
            <li><a href="#"><i className="fa far fa-heart fa-2x"></i></a></li>
            <li><a href="#"><i className="fa fas fa-shopping-cart fa-2x" aria-label="Items in your cart"></i></a></li>
          </ul>
        </div>

        {/* <!-- LOGO --> */}
        <div className="logo">
          <a href="./index.html" rel="home" className="site-logo">
            <img src={logo} alt="WINE HUB."/>
            {/* <!-- Site logo --> */}
          </a>
        </div>

        {/* <!-- Navigation menu -->       */}
        <nav aria-label="Primary" className="navigation  m-hide">
          <ul className="menu">
            <li><a href="./index.html">HOME</a></li>
            <li><a href="#">Shop</a>
              <ul className="submenu">
                <li><a href="#">Dessert Wine</a></li>
                <li><a href="#">Red Wine</a></li>
                <li><a href="#">Rose Wine</a></li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

      {/* <!-- Page Title --> */}
      <div className="page-title">
        <h2>PAGE TITLE</h2>
      </div>
    </header>
  )
}

export default Header