//estilização
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import "./style.css";


function VisualizarServico() {

    const { idServico } = useParams()

    const [ nome , setNome] = useState<string>("")
    const [ valor , setValor ] = useState<string>("")
    const [ descricao , setDescricaos ] = useState<string>("")
    const [ techs , setTechs ] = useState<string[]>([])

    function buscarServicoPorID(){
        api.get("servicos/" + idServico)
        .then((response:any)=>{
            setNome(response.data.nome)
            setValor(response.data.valor)
            setDescricaos(response.data.descricao)
            setTechs(response.data.techs)
        })
        .catch((error:any)=>{
            console.log("deu erro man", error);
        })
        
        
    }

    useEffect(() =>{
        buscarServicoPorID()
    }, [])

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            techs.map((t: string, index: number) =>{
                                return <span key={index}>{t}</span>
                            })
                        }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;