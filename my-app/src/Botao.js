import React, { useEffect, useState } from 'react'

const Botao = ()=>{
    const [some, setSoma] = useState(0)
    const [frase, setFrase] = useState('Meu nome é ')
    
    
    const handleFrase = ()=>{
        setFrase(frase +'Douglas')
        console.log(frase)
    }
    const handle = () => {
        setSoma(some+1)
        console.log(some)
    }
    useEffect(()=>{console.log("useEffect executado")}, [frase])
    useEffect(()=>{console.log("useEffect na soma")}, [some])
    return(
        <>
    <button onClick={handleFrase}>Muda frase</button>
    <button onClick={handle}>Some aqui</button>
        </>
    )
}

export default Botao