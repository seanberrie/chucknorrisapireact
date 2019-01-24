import React, { Component } from 'react'
import 'milligram'
import './App.css'
import axios from 'axios'
import Joke from './components/Joke'

class App extends Component {
  state = {
    joke: undefined
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    axios.get(`http://api.icndb.com/jokes/random`)
     .then(({ data }) => {
     this.setState({ joke: data.value.joke})
  })
}
  render() {
    let { joke } = this.state
    return (
      <main className='container'>
        <h1 >Chuck Norris Joke</h1>
        <Joke joke={joke} />
        <form onSubmit={this.handleSubmit}>
          <input type='submit' name='joke' value='Random' />
        </form>
      </main>
    )
  }
}

export default App
