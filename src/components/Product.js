// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component{
  render(){
    return(
      <div>
      its prop-types 
      </div>
      )
  }
}

Product.PropTypes={
  name:PropTypes.String.isRequired,
  producer:PropTypes.String,
  hasWatermark:PropTypes.Boolean,
  color:PropTypes.String.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight:PropTypes.Number.isRequired
}
Product.defaultProps={
  hasWatermark:false
}

export default Product;
