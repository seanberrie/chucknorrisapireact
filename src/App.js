import React, { Component } from 'react'
import 'milligram'
import './App.css'
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <main className='container'>
        <h1 >Talk Like A Brooklynite</h1>
        <TransShow advice={ advice } />
        <form onSubmit={this.handleSubmit}>
          <input 
          type='text'
          name='search'
          onChange={this.handleChange}
          placeholder='Enter text to get joke...'
          value={ search } />
          <input type='submit' value='Random' />
        </form>
      </main>
    )
  }
}

export default App
