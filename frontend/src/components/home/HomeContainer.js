import React, { Component } from 'react'
import CardComponent from './CardComponent'

const directions = [
  { title: 'All Characters', description: 'Go to all characters', url: '/characters' },
  { title: 'One Character', description: 'Go to one character', url: '/characters/1' },
  { title: 'Create Character', description: 'Create one character', url: '/characters/new' }
]

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {directions.map((e, i) => (
          <CardComponent key={i} title={e.title} description={e.description} url={e.url} />
        ))}
      </div>
    )
  }
}

export default HomeContainer
