interface Props{
  foto: any,
  setFotoAmpliada: any
}

export default function FotoAmpliada({foto, setFotoAmpliada}: Props){
  return(
    <div onClick={()=>setFotoAmpliada(null)} className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/60 flex justify-center items-center">
      <div className="max-w-[90%] max-h-[90%] flex items-center justify-center m-auto">
        <img  className="max-w-[45%] max-h-[100%] rounded-md " src={foto.urls.regular} alt={foto.alt_description} />
      </div>
    </div>
  )
}