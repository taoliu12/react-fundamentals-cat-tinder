import React from 'react'

const CatCard = function({ cat }){
  return (
    <div className="CatCard">
      <img height="100px" width="100px" src={cat.image_url} alt={cat.name}/>
      <p>{cat.name}</p>
    </div>
  )
}

export default CatCard
