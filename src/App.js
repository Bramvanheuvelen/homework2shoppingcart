import React, { Component } from 'react'
import './App.css'
import Clock from 'react-live-clock';
import Products from './components/CartItem'
import CheckOutButton from './components/CheckOutButton'


const products = [
    {
        id: 1,
        name: "Prada Shoes",
        price: 570,

    },
    {
        id: 2,
        name: "Rolex Watch",
        price: 649,

    },
    {
        id: 3,
        name: "Paper clips",
        price: 0.1,

    }
]


class App extends Component {

  constructor(props) {
      super(props)
      products.forEach((product) => product.quantity = 0 )
    }

state = { products, totalValue: "Total value:" }

incrementQuantity = (productId) => {
  this.setState({
    product: this.state.products.map(product => {
      if (product.id !== productId) return product
      return {...product, ...product.quantity ++}
    })
  })
}

ShoppingCartValue = () => {
    const cartItemsTotal = this.state.products
      .map(product => product.quantity * product.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue) //needs reduce to give the total instead of an array of all the values
    this.setState({
      totalValue: "Total value:" +" "+ cartItemsTotal
    })
  }


  render() {
    return (
      <div className="App">
      <Clock
      format={'h:mm'}
      ticking={true} />
      <ul>
        {this.state.products.map((product) =>
          <Products
          key={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          onPlusClick={() => this.incrementQuantity(product.id)}
          />)}
      </ul>
      <CheckOutButton onClick={this.ShoppingCartValue} />
      <p>{this.state.totalValue}</p>
      </div>
    )
  }
}

export default App
