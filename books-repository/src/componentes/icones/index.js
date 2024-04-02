import iconePerfil from '../../imagens/perfil.svg'
import iconeSacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const MenuIcones = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;`

const ItensIcone = styled.li`
  list-style: none;`

function IconesHeader() {

    const listaIcones = [iconePerfil, iconeSacola]

    return (
        <MenuIcones>
        {
          listaIcones.map( (icone) => (
            <ItensIcone><img src={icone}></img></ItensIcone>
          ) )
        }
      </MenuIcones>
    )
}

export default IconesHeader