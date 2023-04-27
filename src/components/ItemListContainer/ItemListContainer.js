import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className="title">{props.greeting}</div>
  )
}

export default ItemListContainer