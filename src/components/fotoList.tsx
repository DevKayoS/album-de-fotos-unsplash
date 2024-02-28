import { Foto } from "./foto";


interface Props {
  fotos: Array<any>,
  setFotoAmpliada(): any 
}

export default function FotoList({fotos, setFotoAmpliada}: Props){
  return(
    <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[100vh] items-center justify-center m-auto  gap-4"> 
      {fotos.map((fotos: any)=>
        <Foto key={fotos.id} dados={fotos} setFotoAmpliada={setFotoAmpliada}/>
      )}
    </div>
  )
}