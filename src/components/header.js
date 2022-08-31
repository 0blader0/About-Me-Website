import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <Link to="/" className="header-navlink">
          <svg viewBox="0 0 1024 1024" className="header-icon">
            <path d="M426.667 853.333c-34.219 0-66.347-13.312-90.539-37.504-24.149-24.149-37.461-56.32-37.461-90.496s13.312-66.347 37.504-90.539l122.795-122.795-122.795-122.837c-24.192-24.149-37.504-56.32-37.504-90.496s13.312-66.347 37.504-90.539c48.341-48.299 132.651-48.341 181.035 0.043l303.829 303.829-303.872 303.829c-24.149 24.192-56.277 37.504-90.496 37.504zM426.667 256c-11.435 0-22.101 4.437-30.165 12.459-8.064 8.107-12.501 18.816-12.501 30.208s4.437 22.101 12.501 30.165l183.125 183.168-183.125 183.168c-8.064 8.064-12.501 18.731-12.501 30.165s4.437 22.101 12.501 30.165c16.128 16.171 44.245 16.128 60.331 0.043l243.541-243.541-243.541-243.499c-8.064-8.064-18.731-12.501-30.165-12.501z"></path>
          </svg>
        </Link>
        <div className="header-container">
          <Link to="/" className="header-navlink1 large">
            Bladers
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-navlink2 large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink3 large">
              About
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2"></div>
            <div data-type="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-type="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink4 large">
          Bladers
          </Link>
          <div data-type="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon4">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink5 large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink6 large">
              Profile
            </Link>
            <span className="header-text large">Coming Soon</span>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

export default Header
