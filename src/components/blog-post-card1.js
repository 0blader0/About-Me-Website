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
              src={props.image_src}
              alt={props.image_alt}
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
  label: 'Bladers',
  title: 'About Me Website',
  rootClassName: '',
  description: 'Simple modern portfolio website built with React',
  author: 'Blader',
  time: 'Link to repository on GitHub',
  image_src: '/playground_assets/1662121144150-200w.png',
  image_alt: 'image',
}

BlogPostCard1.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard1
