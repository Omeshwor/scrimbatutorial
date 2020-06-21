import React from 'react'

function Product(props){
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <hr/>
    </div>
  )
}

export default Product