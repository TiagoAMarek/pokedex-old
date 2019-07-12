import React from 'react'
import { useSelector } from 'react-redux'

const DetailBody = () => {
  const { data: pokemon } = useSelector(({ Pokemon }) => Pokemon)

  return (
    <div className="DetailBody">
      <h1 className="title">{pokemon.name}</h1>

    </div>
  )
}

export default DetailBody
