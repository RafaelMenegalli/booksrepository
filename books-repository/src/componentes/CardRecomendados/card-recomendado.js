import styled from 'styled-components';
import { TituloUltimoLancamentos } from '../Titulo';

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 250px;
    background-color: white;
    margin: 50px 0;
    gap: 200px;
    border-radius: 15px;
`
const ImagemButtomContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function CardRecomendados({ titulo, subtitulo, descricao, imagem }) {

    console.log("Props Recebos :::>", titulo, subtitulo, descricao, imagem)

    return (
        <Card>
            <div>
                <TituloUltimoLancamentos 
                    cor = "darkblue"
                    tamanhoFonte = "1.5em"
                >{titulo}</TituloUltimoLancamentos>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
            </div>
            <ImagemButtomContainer>
                <img src={imagem}></img>
                <button>Saiba Mais</button>
            </ImagemButtomContainer>
        </Card>

    )
}

export default CardRecomendados