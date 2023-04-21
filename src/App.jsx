import { useState } from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { Login } from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import { Error404 } from './pages/Error404';


function App(props) {
  const [logado, setLogado] = useState(false);

  function handleLogin(event) {
    console.log("agora ta logado")
    setLogado(true)
  }

  function handleLougout(event) {
    setLogado(false);
  }
  return (
      <BrowserRouter>
        <Routes>
          {logado?
          <>
               <Route path='/' element={<Home/>}/>
               <Route path='/cadastrar' element={<Cadastrar/>}/>
               </>
               :
               <Route path='/login' element={<Login onLogin={handleLogin}/>}/>

          }
           <Route path='*' element={<Error404/>}/>

     
          
        </Routes>
      </BrowserRouter>
  )
}

export default App
