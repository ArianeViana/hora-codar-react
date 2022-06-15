import Button from "./Button"

function Evento() {
    
    function meuEvento(){
        console.log("Opa, fui ativado")
    }

    function segundoEvento(){
        console.log("Fui ativado pela segunda vez!")
    }
    
    return (
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro Evento" />
        <Button event={segundoEvento} text="Segundo Evento" />
        {/* <button onClick={meuEvento}>Ativar!</button> */}
        
        </>
    )
}

export default Evento