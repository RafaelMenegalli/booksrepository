import styled from 'styled-components';
import { TituloUltimoLancamentos } from '../Titulo';

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 250px;
    background-color: #003468;
    margin: 50px 0;
    gap: 100px;
    border-radius: 15px;
    color: white;
    font-size: 1.5em;
    box-shadow: 7px 9px 4px 0px rgba(0,0,0,0.39);

`
const ImagemButtomContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonSaibaMais = styled.button`
    margin-top: 10px;
    border-radius: 2px;
    cursor: pointer;
    background-color: white;
    border: none;
    font-size: 16px;
`

const TextoContainer = styled.div`
    width: 500px;
`

function CardRecomendados({ titulo, subtitulo, descricao, imagem }) {
    return (
        <Card>
            <TextoContainer>
                <h1>{titulo}</h1>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
            </TextoContainer>
            <ImagemButtomContainer>
                <img src={imagem}></img>
                <ButtonSaibaMais>Saiba Mais</ButtonSaibaMais>
            </ImagemButtomContainer>
        </Card>

    )
}

export default CardRecomendados