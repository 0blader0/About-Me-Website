import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">Bladers</span>
          <span className="">Copyright © 2022</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text2 large">Menu</span>
            <Link to="/" className="footer-navlink large">
              Home
            </Link>
            <Link to="/profile" className="footer-navlink1 large">
              About me
            </Link>
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

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
