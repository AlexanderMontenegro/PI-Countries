import React from 'react'

const Card = ({pais}) => {
  return (
    <div className='card'>
      <h2> {pais.name} </h2>
      <p> Capital: {pais.capital} </p>
      <p> Poblacion: {pais.population} </p>
      
      
    </div>
  )
}

export default Card
