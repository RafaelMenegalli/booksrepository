import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #003366, #3399ff)
  `

function App() {
    return (
        <AppContainer>
            <Header />
            <Pesquisa />
            <UltimosLancamentos />
        </AppContainer>
    );
}

export default App;
