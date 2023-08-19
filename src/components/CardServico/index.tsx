import "./style.css"

function CardServico(props: any) {

    return (
        <>
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
        </>
    )
}

export default CardServico