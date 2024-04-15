import styled from 'styled-components';
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const AppContainer = styled.div`
    background: linear-gradient(90deg, #003366, #3399ff);
`

function Estante() {
    return (
        <div>
            <Button>Hello World</Button>
        </div>
    )
}

export default Estante;