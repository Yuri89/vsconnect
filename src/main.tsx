import React from 'react';
import ReactDOM from 'react-dom/client';
import secureLocalStorage from 'react-secure-storage'


//componentes
import Home from "./pages/Home";
import ListaServicos from './pages/ListaServicos';
import Header from "../src/components/Header"
import ListaDevs from './pages/ListaDevs';
import PerfilUsuario from './pages/PerfilUsuario';
import VisualizarServico from './pages/VisualizarServico';
import CadastroUsuario from './pages/CadastroUsuario'
import Footer from './components/Footer';
import CadastroServico from './pages/CadastroServico'
import Login from './pages/Login';

//Rotas

import { BrowserRouter, Routes, Route } from "react-router-dom"

//estilização global
import "./index.css";

function logado(){

  if(secureLocalStorage.getItem("user")){
    const objetoUsuario: any = secureLocalStorage.getItem("user")

    const nome:string = objetoUsuario.user.nome.trim().split(" ")[0]

    return { logado : true, nomeUsuario : nome }
  }else{
    return {logado : false, nomeUsuario : null}
  }

}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header usuario={logado()}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Lista/Servicos' element={<ListaServicos/>}/>
        <Route path='Lista/Devs' element={<ListaDevs/>}/>
        <Route path='perfil/:idUsuario' element={<PerfilUsuario/>}/>
        <Route path='servico/:idServico' element={<VisualizarServico/>}/>
        <Route path='cadastrar/usuario' element={<CadastroUsuario/>}/>
        <Route path='cadastrar/servico' element={<CadastroServico/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
