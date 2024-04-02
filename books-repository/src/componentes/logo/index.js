import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex; 
  font-size: 25px;`

function Logo() {
    return (
        <LogoContainer>
          <img 
            src={logo} 
            alt = "logo"
          ></img>
          <p><strong>BooksRepository</strong></p>
        </LogoContainer>
    )
}

export default Logo