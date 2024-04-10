import Header from '../componentes/Header';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
    background: linear-gradient(90deg, #003366, #3399ff);
`
function Home(){
    return(
        <AppContainer>
            <Pesquisa />
            <UltimosLancamentos />
        </AppContainer>
    )
}

export default Home;