import Item from "./Item"

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1985}
                 />
                 <Item marca = "Ford" anoLancamento={1964}/>
                 <Item marca="Renault" anoLancamento={1999}/>
                 <Item />
            </ul>        
        </>
    )
}

export default List