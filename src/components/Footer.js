import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="main-footer">
        <section className="footer-links">
          <div className="footer-about-us">
            <h3>ABOUT</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam eius mollitia obcaecati, neque rerum dignissimos, recusandae ducimus qui reiciendis nam necessitatibus? Natus est reprehenderit eligendi facere, cupiditate magnam explicabo in. <a href="">MORE</a></p>
          </div>
          <div>
            <h3>QIUCK LINKS</h3>
            <ol>
              <li><a href="">HOME</a></li>
              <li><a href="">SHOP</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">CONTACT</a></li>
            </ol>
          </div>
          <div>
            <h3>CATEGORIES</h3>
            <ol>
              <li><a href="">DESSERT WINE</a></li>
              <li><a href="">RED WINE</a></li>
              <li><a href="">ROSE WINE</a></li>
              <li><a href="">WHITE WINE</a></li>
            </ol>
          </div>
        </section>
        
        <section className="social-section">
          <ul className="social">
            <li><a href="#"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram fa-2x"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter fa-2x"></i></a></li>
          </ul>
        </section>

        <nav aria-label="Legal" className="footer-nav">
          <ul className="legal">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Accessibility Policy</a></li>
          </ul>
        </nav>
        <p className="copyright">&copy; Copyright, 1991.</p>
      </div>
    </footer>
  )
}

export default Footer