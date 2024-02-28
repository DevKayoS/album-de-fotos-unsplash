interface Props {
  dados: any,
  setFotoAmpliada: any
}


export function Foto({dados, setFotoAmpliada}: Props){
  return (
    <div onClick={() => setFotoAmpliada(dados)}>
      <img className="rounded-lg size-[100%] cursor-pointer max-h-96" src={dados.urls.small} alt={dados.alt_description} />
    </div>
  )
}