import React, { PureComponent } from 'react'
import './CartItem.css'

export default class Item extends PureComponent {
  render() {
    const { name, price } = this.props

    return (
      <li className="Item">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </li>
    )
  }
}
