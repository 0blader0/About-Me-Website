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
              alt={props.image_alt}
              src={props.image_src}
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
  image_alt: 'image',
  author: 'Blader',
  label: 'Bladers',
  time: 'Link to repository on GitHub',
  title: 'About Me Website',
  description: 'Simple modern portfolio website built with React',
  image_src: '/playground_assets/1662121144150-200w.png',
  rootClassName: '',
}

BlogPostCard1.propTypes = {
  image_alt: PropTypes.string,
  author: PropTypes.string,
  label: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard1
