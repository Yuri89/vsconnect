//estilização
import "./style.css";

import { useState , useEffect  } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage"

function Login() {

    const navigate = useNavigate()

    const [email , setEmail] = useState<string>("")
    const [senha , setSenha] = useState<string>("")

    function realizarAutenticacao(event:any){
        event.preventDefault()

        const usuario = {
            email: email,
            password: senha,
        }

        api.post("login" , usuario)
        .then((response:any) =>{
            window.alert("Login efetuado")
            
            secureLocalStorage.setItem("user" , response.data)
            console.log(response)

            navigate("/perfil/" + response.data.user.id)
            navigate(0)
        })
        .catch((error:any) => {
            window.alert("deu erro man volta e corrige essa bagaça")
        })

    }

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form className="login_formulario" method="POST" onSubmit={realizarAutenticacao}>
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite aqui seu e-mail:"
                                required
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite aqui sua senha:"
                                required
                                onChange={(event) => setSenha(event.target.value)}
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;