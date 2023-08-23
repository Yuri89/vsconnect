import { Link } from "react-router-dom"
import "./style.css"

function CardServico(props: any) {

    return (
        <>
            <Link className="cardStyle" to={"/servico/"+ props.id}>
            <div className="servico">
                <div className="topo_servico">
                    <h3>{props.servicoName}</h3>
                    <span>R$ {props.servicoValor}</span>
                </div>
                <p>{props.servicoDescricao}</p>
                <div className="techs">
                    {
                        props.listaTechsS.map((tech: String, indice: number) =>{
                            return  <span key={indice}>{tech}</span>
                        })
                    }
                </div>
            </div>
            </Link>
        </>
    )
}

export default CardServico