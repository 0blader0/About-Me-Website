import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Soft UI Pro</title>
        <meta property="og:title" content="Profile - Soft UI Pro" />
      </Helmet>
      <div className="profile-profile">
        <img
          alt="image"
          src="/playground_assets/app-200h.png"
          className="profile-image"
        />
        <div className="profile-container01">
          <div className="profile-container02">
            <h4 className="profile-text">Dominik Czech aka. Blader</h4>
          </div>
          <div className="profile-container03"></div>
          <span className="medium">
            Decisions: If you can’t decide, the answer is no. If two equally
            difficult paths, choose the one more painful in the short term (pain
            avoidance is creating an illusion of equality). Choose the path that
            leaves you more equanimous.
          </span>
        </div>
        <Header></Header>
      </div>
      <div className="profile-contact">
        <div className="profile-container04">
          <div className="profile-info">
            <div className="profile-container05">
              <h3 className="headingTwo">
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Information</span>
              </h3>
              <span className="profile-text5">
                Fill up the form and I will reach you back.
              </span>
              <div className="profile-container06">
                <div className="profile-container07">
                  <svg viewBox="0 0 1024 1024" className="profile-icon">
                    <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                  </svg>
                  <a href="tel:+40 772 100 200" className="profile-link small">
                    (+420) 703 952 691
                  </a>
                </div>
                <div className="profile-container08">
                  <svg viewBox="0 0 1024 1024" className="profile-icon2">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:hello@creative-tim.com?subject="
                    className="profile-link1"
                  >
                    dominik-czech@email.cz
                  </a>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/wave-1.svg"
              className="profile-image1"
            />
            <div className="profile-container09"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
