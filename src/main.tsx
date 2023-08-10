import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home/";

//estilização global
import "./index.css";
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    {/* <ListaServicos/> */}
    <Footer/>
  </React.StrictMode>,
)
