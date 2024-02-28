import FotoAmpliada from "./components/fotoAmpliada";
import FotoList from "./components/fotoList";
import SearchBar from "./components/searchBar";

import axios from "axios"

import {useState, useEffect} from "react"



export function App() {
  const [query, setQuery] = useState("")
  const [categoria, setCategoria] = useState("")
  const [fotos, setFotos] = useState([])
  const [fotoAmpliada, setFotoAmpliada] =useState(null)
  const [activateSearch, setActivateSearch] = useState(false)

  const fetchData = async(query: string, categoria: any)=>{
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    if(query || categoria){
      let searchQuery = query;

      if(query && categoria){
        if(query && categoria) {
          searchQuery = `${query} ${categoria}`
        } else if (categoria) {
          searchQuery = categoria
        }
      }
      const response = await axios.get("https://api.unsplash.com/search/photos", {
      params : {
        client_id: apiKey,
        query: searchQuery
      },
    });

    setFotos(response.data.results);




    return;
    }

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params : {
        client_id: apiKey,
        count: 50
      }
    });

    setFotos(response.data)
    console.log(response.data)
  }

  useEffect(()=> {
    fetchData(query, categoria)
  }, [])

  useEffect(() => {

    if(activateSearch){
      fetchData(query, categoria)
      setActivateSearch(false)
    }

  },[activateSearch] )

  return (
    <div>
      <SearchBar setQuery={setQuery} setCategoria={setCategoria} setActivateSearch={setActivateSearch}/>
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada}/>

      {fotoAmpliada &&  <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada}/>}
      

    </div>
  )
}
