import React from 'react'

export const ContenedorGif = ({arregloGifs}) => {

  return (

    <>
    <div className="d-flex flex row justify-content-center alig-items-center row row-cols-2 row-cols-lg- g-2 g-lg-">
    {arregloGifs.map(({id, url})=>{
      return(
        <img key={id} src={url}/>
      )
    })}
    </div>

    </>
  )
}
