import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuNavegacao = styled.ul`
display: flex;`

const ItensNavegacao = styled.li`
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    font-size: 16px;
    min-width: 120px;`

const listaItensNavegacao = ['Categorias', 'Estante', 'Favoritos']

function MenuNavegacaoFuncao() {
    return (
        <MenuNavegacao>
            {
                listaItensNavegacao.map((itemNavegacao) => (
                    <Link to={`/${itemNavegacao.toLowerCase()}`}> <ItensNavegacao><p>{itemNavegacao}</p></ItensNavegacao> </Link>
                ))
            }
        </MenuNavegacao>
    )
}

export default MenuNavegacaoFuncao