import React, { Component } from 'react'
import './App.css'

const products = [
    {
        id: 1,
        name: "Prada Shoes",
        price: 570
    },
    {
        id: 2,
        name: "Rolex Watch",
        price: 649
    },
    {
        id: 3,
        name: "Paper clips",
        price: 0.1
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        {products.map((item, index) => <Item key={index} { ...item } />)}
      </ul>
      </div>
      <CheckOutButton />
    )
  }
}

export default App
