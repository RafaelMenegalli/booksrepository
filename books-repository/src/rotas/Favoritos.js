import Header from '../componentes/Header';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
    background: linear-gradient(90deg, #003366, #3399ff);
`
function Favoritos(){
    return(
        <AppContainer>
            <Pesquisa />
        </AppContainer>
    )
}

export default Favoritos;