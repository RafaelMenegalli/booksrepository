import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const ParagrafoEscritaLogo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
`


function Logo() {
    return (
        <LogoContainer>
          <div>
          <img 
            src={logo} 
            alt = "logo"
          ></img>

          </div>
          <div>
            <ParagrafoEscritaLogo><strong>Books</strong></ParagrafoEscritaLogo>
            <ParagrafoEscritaLogo><strong>Repository</strong></ParagrafoEscritaLogo>
          </div>
        </LogoContainer>
    )
}

export default Logo