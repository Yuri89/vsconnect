import React from 'react';
import ReactDOM from 'react-dom/client';


//componentes
import Home from "./pages/Home";
import ListaServicos from './pages/ListaServicos';
import Header from "../src/components/Header"
import ListaDevs from './pages/ListaDevs';
import PerfilUsuario from './pages/PerfilUsuario';
import VisualizarServico from './pages/VisualizarServico';
import CadastroUsuario from './pages/CadastroUsuario'
;import Footer from './components/Footer';
//Rotas

import { BrowserRouter, Routes, Route } from "react-router-dom"

//estilização global
import "./index.css";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Lista/Servicos' element={<ListaServicos/>}/>
        <Route path='Lista/Devs' element={<ListaDevs/>}/>
        <Route path='perfil/:idUsuario' element={<PerfilUsuario/>}/>
        <Route path='servico/:idServico' element={<VisualizarServico/>}/>
        <Route path='cadastrar/usuario' element={<CadastroUsuario/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
