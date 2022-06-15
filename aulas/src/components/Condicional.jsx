import { useState } from "react"

function Condicional () {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviar(e){
        e.preventDefault()
        // console.log("Testando")
        setUserEmail(email)
    }

    function limpar(){
        setUserEmail("")
    }

    return(
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="digite seu email"
                onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviar}>Enviar</button>
                {/* renderização condicional */}
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limpar}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional