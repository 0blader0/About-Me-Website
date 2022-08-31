import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">Bladers</span>
          <span>Copyright © 2022</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text2 large">Menu</span>
            <span className="footer-text3 large">About Me</span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
