import React from 'react'

function Item({prod}) {

  return (
    <div key={prod.id}>
        <div>

        </div>        
    </div>
  )
}

export default Item

//<li key={prod.id}>{prod.name}</li>