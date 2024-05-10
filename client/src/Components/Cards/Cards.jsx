import React from 'react';
import { useSelector } from `react-redux`;
import Card from `../Card/Card`;

const Cards = () => {

  const allPaises = useSelector(state => state.allPaises);

  return (
    <div>
      
      {allPaises.map((pais, index) => (
                <Card key={index} pais={pais} />
            ))}

    </div>
  )
}

export default Cards;
