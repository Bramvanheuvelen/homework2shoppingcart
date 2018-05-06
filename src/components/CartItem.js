import React, { PureComponent } from 'react'
import './CartItem.css'
import PropTypes from 'prop-types'

export const productShape = PropTypes.shape({
  productId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired
})

export default class Products extends PureComponent {
  static propTypes = productShape.isRequired


  render() {
    const { name, price, quantity, onPlusClick } = this.props

    return (
      <li className="Item">
        <p className="name">{name}</p>
        <p className="price">Price: {price}</p>
        <p className="quantity">Quantity: {quantity}</p>
        <button onClick={onPlusClick}>+</button>
      </li>
    )
  }
}
