import React from 'react'

export const Carts = ({dog}) => {
  return (
    <div className='cards'>
        <img className='img' src= {dog.img} alt="" />
        <article className='containerArticle'>
            <h3>{dog.name}</h3>
            <h3>{dog.telefono}</h3>
            <h3>{dog.pais}</h3>
            <h3>{dog.descripcion}</h3>
        </article>
    </div>
  )
}
