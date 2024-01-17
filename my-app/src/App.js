import logo from './logo.svg';
import './App.css';
import Botao from './Botao'
import { useState } from 'react';
// import UserLog from './userLog';


function App() {
 
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu primeiro projeto.
        </p>
        <button onClick={handle} >Mude a frase</button>
        <Botao onAcaoClick={handleClick}  msg='1' >Botao 1</Botao>
        <Botao onAcaoClick={handleClick}  msg='2' >Botao 2</Botao>
        <Botao onAcaoClick={handleClick}  msg='3' >Botao 3</Botao>
        <Botao onAcaoClick={handleClick}  msg='4' >Botao 4</Botao>
        <Botao onAcaoClick={handleClick}  msg='5' >Botao 5</Botao>
        
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
