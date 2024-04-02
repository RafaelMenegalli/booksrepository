import Logo from '../logo/index.js'
import MenuNavegacao from '../OpcoesHeader'
import IconesHeader from '../icones/index.js';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <MenuNavegacao />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header