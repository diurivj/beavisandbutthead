import React, { useState, useEffect } from 'react'
import axios from 'axios'

function OneCharacter() {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios
      .get('https://api-test-beavis.herokuapp.com/characters/5cd445d15ea5ac155bf1de7d')
      .then(({ data }) => {
        setCharacter(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <p>{character.name}</p>
    </div>
  )
}

export default OneCharacter
