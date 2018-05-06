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

state = { products }

incrementQuantity = (productId) => {
  this.setState({
    product: this.state.products.map(product => {
      return product.id === productId ? {...product, ...product.quantity =+ 1} : product
    })
  })
}

  render() {
    return (
      <div className="App">
      <Clock
      format={'h:mm'}
      ticking={true} />
      <ul>
        {this.state.products.map((product) => <Products key={product.id} name={product.name}
              price={product.price}
              onPlusClick={() => this.incrementQuantity(product.id)}
              quantity={product.quantity} />)}
      </ul>
      <CheckOutButton />
      </div>
    )
  }
}

export default App
