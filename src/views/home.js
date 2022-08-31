import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bladers</title>
        <meta property="og:title" content="Bladers" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">Dominik Czech aka. Blader</h1>
            <h1 className="home-text01">
              Web Developer, Student, and Project Manager in Czech Republic
            </h1>
            <div className="home-container02">
              <Link to="/profile" className="home-navlink">
                <PrimaryPinkButton
                  button="Contact Me"
                  className="home-component1"
                ></PrimaryPinkButton>
              </Link>
            </div>
            <div className="home-container03">
              <div className="home-container04"></div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="home-image"
      />
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text02 headingOne">
            <span className="home-text03">From nothing to something</span>
          </h1>
          <span className="home-text04">I&apos;m self learner</span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1661760860169-ca0ee62efc62?ixid=Mnw5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNjYxOTU4MzE5&amp;ixlib=rb-1.2.1&amp;w=1100"
              className="home-image1"
            />
            <span className="home-text05 small">
              Over years i learned programing languages like HTML, CSS, JS, Py
              and many more...
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="home-container09"></div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1570286424717-86d8a0082d0c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fENvZGV8ZW58MHx8fHwxNjYxOTU5ODU4&amp;ixlib=rb-1.2.1&amp;w=500"
              className="home-image2"
            />
            <div className="home-container11"></div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image3"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text06 headingOne">About Bladers</h2>
              <p className="home-text07">
                <span className="body">
                  In the past years I created a lot of Discord Bots, best one is
                  &quot;Bladers&quot;.
                </span>
                <br></br>
                <span>
                  Advanced &amp; Powerful discord bot wit a lot features like
                  Moderation,
                </span>
                <br></br>
                <span>Music</span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container15">
              <div className="home-container16">
                <div className="home-container17">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M938.667 469.333h-170.667c-18.731 0-34.645 12.075-40.491 29.184l-87.509 262.571-215.509-646.571c-7.467-22.357-31.616-34.432-53.973-27.008-13.227 4.395-22.827 14.635-27.008 27.008l-118.272 354.816h-139.904c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c18.048-0.128 34.56-11.392 40.491-29.184l87.509-262.571 215.509 646.571c4.181 12.373 13.781 22.571 26.965 26.965 22.357 7.467 46.507-4.651 53.973-26.965l118.315-354.816h139.904c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
                  </svg>
                </div>
                <div className="home-container18">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M298.667 213.333c0 23.552 9.6 44.928 25.003 60.331s36.779 25.003 60.331 25.003h256c23.552 0 44.928-9.6 60.331-25.003s25.003-36.779 25.003-60.331h42.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM384 42.667c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331h-42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-42.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003zM384 128h256v85.333h-256z"></path>
                  </svg>
                </div>
                <div className="home-container19">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M618.965 401.28l-106.965 61.867-297.003-171.819 107.136-61.227zM809.003 291.328l-104.789 60.629-296.277-170.88 82.517-47.147c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-136.491 77.995c-8.96 1.749-17.323 6.4-23.595 13.483l-138.624 79.232c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container20">
                <div className="home-container21">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M864.626 473.162c-65.754-183.44-205.11-348.15-352.626-473.162-147.516 125.012-286.87 289.722-352.626 473.162-40.664 113.436-44.682 236.562 12.584 345.4 65.846 125.14 198.632 205.438 340.042 205.438s274.196-80.298 340.040-205.44c57.27-108.838 53.25-231.962 12.586-345.398zM738.764 758.956c-43.802 83.252-132.812 137.044-226.764 137.044-55.12 0-108.524-18.536-152.112-50.652 13.242 1.724 26.632 2.652 40.112 2.652 117.426 0 228.668-67.214 283.402-171.242 44.878-85.292 40.978-173.848 23.882-244.338 14.558 28.15 26.906 56.198 36.848 83.932 22.606 63.062 40.024 156.34-5.368 242.604z"></path>
                  </svg>
                </div>
                <div className="home-container23">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M884.608 441.301l-392.107 392.107c-41.685 41.685-96.256 62.507-150.955 62.507s-109.269-20.821-150.955-62.507-62.507-96.256-62.507-150.955 20.821-109.269 62.507-150.955l392.107-392.107c25.003-25.003 57.728-37.504 90.581-37.504s65.536 12.501 90.581 37.504 37.504 57.728 37.504 90.581-12.501 65.536-37.504 90.581l-392.533 392.107c-8.363 8.363-19.243 12.544-30.208 12.544s-21.845-4.181-30.208-12.501-12.501-19.2-12.501-30.208 4.181-21.845 12.501-30.208l362.24-361.813c16.683-16.64 16.683-43.648 0.043-60.331s-43.648-16.683-60.331-0.043l-362.24 361.813c-25.003 25.003-37.504 57.856-37.504 90.539s12.501 65.536 37.504 90.539 57.856 37.504 90.539 37.504 65.536-12.501 90.539-37.504l392.533-392.107c41.685-41.685 62.507-96.341 62.507-150.912s-20.864-109.269-62.507-150.912-96.341-62.507-150.912-62.507-109.269 20.864-150.912 62.507l-392.107 392.107c-58.325 58.325-87.509 134.869-87.509 211.285s29.184 152.96 87.509 211.285 134.869 87.509 211.285 87.509 152.96-29.184 211.285-87.509l392.107-392.107c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"></path>
                  </svg>
                </div>
                <div className="home-container26">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M170.667 512c94.251 0 179.541 38.144 241.365 99.968s99.968 147.115 99.968 241.365c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM170.667 213.333c176.725 0 336.683 71.595 452.565 187.435s187.435 275.84 187.435 452.565c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667c0-200.277-81.237-381.696-212.437-512.896s-312.619-212.437-512.896-212.437c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM298.667 810.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
