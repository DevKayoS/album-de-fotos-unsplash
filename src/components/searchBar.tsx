import { ChangeEvent } from "preact/compat"

interface Props {
  setQuery: any,
  setActivateSearch: any,
  setCategoria: any
}

export default function SearchBar({setQuery, setCategoria, setActivateSearch}: Props){
  const categorias = [
    "Natureza",
    "Tecnologia",
    "Pessoas",
    "Animais",
    "Esportes"
  ]
  
  return(
    <div className="w-full flex items-center justify-center m-8 gap-3">
      <input type="text" 
      placeholder="Pesquisar..." 
      className="border-b-2 m-3 text-xl outline-none border-black"
      onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        onClick={()=> setActivateSearch(true)}
        className="p-2 rounded-md bg-sky-400 hover:text-slate-50 shadow-sm shadow-black hover:bg-sky-700">
        Pesquisar
      </button>
      
      <select 
     onChange={(e) => {
      setCategoria(e.target.value); 
      setActivateSearch(true)
    }}
   
      className="p-2 text-sky-700 rounded-md shadow-sm shadow-black hover:bg-neutral-300 hover:text-black">
        {categorias.map((categoria) => 
          (
            <option className="rounded-sm m-2" key={categoria} value={categoria}>{categoria}</option>
          )
        )}
      </select>
    </div>
  )
}