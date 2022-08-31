import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-image"
      />
      <h5 className="feature-card-text headingThree">{props.title}</h5>
      <span className="feature-card-text1">{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  image_src: '0c545438-dccd-4f3c-8e7c-92d8d4113c1d',
  image_alt: 'image',
  text: 'Get the latest design ideas and turn it into reality.',
  title: 'Design',
}

FeatureCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard
