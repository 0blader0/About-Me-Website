import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
        <span className="blog-post-card1-text1">{props.title}</span>
        <span className="blog-post-card1-text2">{props.description}</span>
        <div className="blog-post-card1-container1">
          <div className="blog-post-card1-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card1-image"
            />
            <span className="blog-post-card1-text3">{props.author}</span>
          </div>
          <a
            href="https://github.com/0blader0/About-Me-Website"
            target="_blank"
            rel="noreferrer noopener"
            className="blog-post-card1-link"
          >
            {props.time}
          </a>
        </div>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  profile_alt: 'profile',
  label: 'Bladers',
  title: 'About Me Website',
  rootClassName: '',
  description: 'Simple modern portfolio website built in React',
  profile_src: '21c38a0a-ba41-432e-8cc1-7d2104161ca6',
  author: 'Blader',
  time: 'Link to repository on GitHub',
}

BlogPostCard1.propTypes = {
  profile_alt: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  profile_src: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
}

export default BlogPostCard1
