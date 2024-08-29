const api_key = 'fbz4tZ1nIP1PK3IzKb0cgMj2HXzoDyzx'
const categoria = 'Messi'
const limit = 10

export const reqGif = async() =>{
    try {
      const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
      const {data} = await resp.json()

        const arregloGifs = data.map((gif)=>
            ({
              id: gif.id,
              url: gif.images.original.url
            })
    )
    return arregloGifs
      
      
    } catch (err) {
      console.error(err)
    }
  }

  /*await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`).then(async (resp) =>{
        await resp.json().then(({data}) => {
          return data.images.original.url
        })
      
      })*/