import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CheckOutButton.css'

export const buttonShape = PropTypes.shape({
    onClick: PropTypes.func.isRequired
  })

  export default class CheckoutButton extends PureComponent {
  static propTypes = buttonShape.isRequired

  render() {
    const { onClick } = this.props

    return (
      <button className="CheckOutButton" onClick={this.props.onClick}>CheckOut</button>
    )
  }
}
