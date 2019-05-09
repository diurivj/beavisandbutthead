import React, { Component } from 'react'
import axios from 'axios'

class AllCharacters extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios
      .get('https://api-test-beavis.herokuapp.com/characters', {})
      .then(({ data }) => {
        this.setState({ characters: data })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { characters } = this.state
    return (
      <>
        {characters.map(e => (
          <p key={e._id}>{e.name}</p>
        ))}
      </>
    )
  }
}

export default AllCharacters
