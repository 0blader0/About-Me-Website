import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Bladers Personal</title>
        <meta property="og:title" content="Profile - Bladers Personal" />
        <meta property="og:description" content="Bladers portfolio" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/86d70f89-093e-45b2-ab9e-509c24d610c2/58998e82-ea21-4023-ac99-d3bb9a6337b5?org_if_sml=1"
        />
      </Helmet>
      <div className="profile-profile">
        <img
          alt="image"
          src="/playground_assets/16621211441503-500w.jpg"
          className="profile-image"
        />
        <div className="profile-container1">
          <div className="profile-container2">
            <h4 className="profile-text">Dominik Czech aka. Blader</h4>
          </div>
          <span>
            <span className="medium">
              Hi, my name is
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text03 medium">Dominik</span>
            <span className="medium">.</span>
            <br className="medium"></br>
            <span className="medium">
              Currently living in
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text07 medium">Czech Republic</span>
            <span className="medium">
              .
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="medium"></br>
            <span className="medium">
              I am a fan of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text11 medium">technology</span>
            <span className="medium">
              ,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text13 medium">design</span>
            <span className="medium">
              , and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text15 medium">programming</span>
            <span className="medium">
              , also interested in
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text17 medium">gaming</span>
            <span className="medium">.</span>
            <br className="medium"></br>
            <br className="medium"></br>
            <span className="medium">
              Over the years i learned programing languages like
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text22 medium">HTML</span>
            <span className="medium">
              ,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text24 medium">CSS</span>
            <span className="medium">
              ,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text26 medium">JS</span>
            <span className="medium">
              ,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text28 medium">
              Py
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="medium">
              and many
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="profile-text30 medium">more</span>
            <span className="medium">
              ...
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="medium">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>(This site is currently in development)</span>
            <br></br>
          </span>
        </div>
        <Header></Header>
      </div>
      <div className="profile-contact">
        <div className="profile-container3">
          <div className="profile-info">
            <div className="profile-container4">
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
              <span className="profile-text40">
                Reach me up if you want anything
              </span>
              <div className="profile-container5">
                <div className="profile-container6">
                  <svg viewBox="0 0 1024 1024" className="profile-icon">
                    <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                  </svg>
                  <a href="tel:+40 772 100 200" className="profile-link small">
                    (+420) 703 952 691
                  </a>
                </div>
                <div className="profile-container7">
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
            <div className="profile-container8"></div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Profile
