import React from 'react'
import { Item } from '../Item/index'

export const ItemList = ({productos}) => {
  return (
    <>
        {productos.map(prod => 
            <Item 
                key={prod.id} 
                {...prod}
            />
        )}
    </>
  )
}

