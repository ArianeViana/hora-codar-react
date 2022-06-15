import PropTypes from 'prop-types'

function Item({marca, anoLancamento}) {
    return(
        <>
        <li>{marca} - {anoLancamento}</li>
        </>
    )

}

Item.propTypes = {
    //defino o tipo de dado que vou receber nos props, e defino que esse dado deverá ser informado(is.Required)
    marca:PropTypes.string.isRequired,
    anoLancamento:PropTypes.number
}

//se colocar um Item sem definir os dados, aparecerá o default
Item.defaultProps = {
    marca: "Faltou a marca",
    anoLancamento: 0
}
export default Item