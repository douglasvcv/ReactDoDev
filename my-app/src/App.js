import logo from './logo.svg';
import './App.css';
import Header from './components/Molecules/Header'
import Botao from './components/Atoms/Button'
import { useState } from 'react';
// import UserLog from './userLog';


function App() {
 
  const [somar, setSomar] = useState(0)
  function somando(){
    console.log('Antes: ',somar)
    setSomar((sominha)=>{
      const novaSoma = sominha+2
      console.log('Depois: ',novaSoma)
      return novaSoma
    })
  }

 function handleClick(valor){
    alert(valor +' ... Att, Jarder')
  }

  const [name, setName] = useState('Teste ')
  const handle = ()=>{
    setName(name + "simples")
    
  }
  console.log(name)
  return (
    <>
    
    <Botao ac>Esquerda</Botao>
    <Botao>Direita</Botao>
    <h1>das</h1>
    <Botao funcaoClick={somando}>Somar</Botao>
    <p>{somar}</p>
    </>
  );
}

export default App;
