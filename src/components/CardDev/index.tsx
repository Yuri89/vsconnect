import "./style.css"

import { Link } from "react-router-dom"

function CardDev(props: any) {

    function verificarListaTechs(){
        if (typeof props.listaTechs === "string"){
            return JSON.parse(props.listaTechs)
        }else{
            return props.listaTechs
        }

    }

    return (
        <>
            <div className="dev">
                <div className="grupo_contato">
                    <img src={"http://localhost:3000/static/" + props.foto} alt="" />
                    <div className="contato_dev">
                        <Link to={ "/perfil/" + props.id }><h3>{props.nome}</h3></Link>
                        <p>{props.email}</p>
                    </div>
                </div>
                <div className="techs">
                    {
                        verificarListaTechs().map((tech: String, indice: number,) => {
                            return <span key={indice}>{tech}</span>
                        })
                    }
                </div>

            {/* <span>HTML</span>
                <span>CSS</span>
                <span>React</span> */}

            </div>
        </>
    )
}

export default CardDev