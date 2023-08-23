import "./style.css";

import CardServico from "../../components/CardServico";

import { useEffect, useState } from "react";
import api from "../../utils/api";

function ListaServicos() {

    const [servicos, setServicos] = useState<any[]>([])

    const [skillDigitado, setSkillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            listarServicos();
        }
        setSkillDigitado(event.target.value);
    }

    function buscarServicosPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const servicosFiltrados = servicos.filter((servicos: any) => servicos.techs.includes(skillDigitado.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum Serviço com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setServicos(servicosFiltrados);
        }


    }

    function listarServicos(){
        api.get("servicos")
        .then((response: any) =>{
            setServicos(response.data)
        })
        .catch((error:any) =>{
            console.log("Error ao realizar um requisição:",error)
        })
    }

    useEffect(() => {
        listarServicos()
    },[])

    return (
        <>
            <main>
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarServicosPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input onChange={verificarCampoSkill} type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." autoComplete="off" />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    servicos.map((servico: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServico
                                                id={servico.id}
                                                servicoName={servico.nome}
                                                servicoValor={servico.valor}
                                                servicoDescricao={servico.descricao}
                                                listaTechsS={servico.techs}

                                            />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default ListaServicos;