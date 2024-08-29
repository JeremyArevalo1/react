import { useGif } from "../hooks/useGif"

export const GifApp = () => {

  const {handleGetGif, arregloGifs} = useGif()

  return (

    <>
    <button onClick={handleGetGif}>Gif Aleatorio</button>
    {arregloGifs.map(({id, url})=>{
      return(
        <img key={id} src={url}/>
      )
    })}
    </>
  )
}