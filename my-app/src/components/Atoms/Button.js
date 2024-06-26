// import React, { useEffect, useState } from 'react'
// import UserLog from './userLog'

const Botao = (props)=>{
    console.log("props:" , props)
    // const [some, setSoma] = useState(0)
    // const [frase, setFrase] = useState('Meu nome é ')
    
    
    // const handleFrase = ()=>{
    //     setFrase(frase +'Douglas')
    //     console.log(frase)
    // }
    // const handle = () => {
    //     setSoma(some+1)
    //     console.log(some)
    // }
   
    return(
        <>
    <button onClick={()=>{props.funcaoClick(props.msg)}}>{props.children}</button>
    {/* <button onClick={handle}>Some aqui</button> */}
        </>
    )
}

export default Botao