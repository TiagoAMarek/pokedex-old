import React from 'react'
import { useSelector } from 'react-redux'

import DetailBody from './DetailBody'
import EmptyState from './EmptyState'

const renderBody = found => {
  if (!found) return <EmptyState></EmptyState>

  return <DetailBody></DetailBody>
}

const PokemonDetail = () => {
  const { found } = useSelector(({ Pokemon }) => Pokemon)

  return (
    <div className="PokemonDetail">
      <section className="section">
        <div className="content">
          {renderBody(found)}
        </div>
      </section>
    </div>
  )
}

export default PokemonDetail