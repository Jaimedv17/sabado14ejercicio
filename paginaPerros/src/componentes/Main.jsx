

import React from 'react'
import { Carts } from './Carts'

export const Main = ({dogs}) => {
  return (
    <div className='containerFather'>
        {
            dogs.map((dog)=>(
                <Carts dog = {dog} key = {dog.id}/>
            ))
        }
    </div>
  )
}
