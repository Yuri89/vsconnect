
import imgLogo from "../../assets/images/logo.svg";
import imgDev from "../../assets/images/dev.png";
import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";

import {Link} from "react-router-dom"

import "./style.css"

function Footer() {
    return (
        <footer>
            <div className="container rodape">
                <div className="span_dicas">
                    <img src={imgDev} alt="" />
                    <div className="span_dicas_texto">
                        <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                            recomendações para saber mais.</p>
                        <a className="botao botao_dicas" href="#">mais dicas</a>
                    </div>
                </div>
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul className="rodape_conteudo_links">
                            <Link to={'/'}><li>Login</li></Link>
                            <Link to={'/'}><li>Home</li></Link>
                            <Link to={'Lista/Servicos'}><li>Listar Serviços</li></Link>
                            <Link to={'Lista/Devs'}><li>Lista Desenvolvedores</li></Link>
                            <Link to={'cadastrar/servico'}><li>Cadastrar Cliente</li></Link>
                            <Link to={'cadastrar/usuario'}><li>Cadastrar Desenvolvedor</li></Link>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>

                            <Link to={"https://pt-br.facebook.com/"}><img src={iconFace} alt="" /></Link>
                            <Link to={"https://www.instagram.com/"}><img src={iconInsta} alt="" /></Link>
                            <Link to={"https://br.linkedin.com/"}><img src={iconLinkedin} alt="" /></Link>

                        </div>
                        <a href="mailto:">contato@vsconnect.com</a>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    )
}

export default Footer