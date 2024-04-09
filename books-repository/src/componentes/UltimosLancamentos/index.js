import styled from 'styled-components';
import { LivrosUltimosLancamentos } from './livrosUltimosLancamentos';
import { TituloUltimoLancamentos } from './../Titulo'
import CardRecomendados from '../CardRecomendados/card-recomendado';
import imagemLivro from './../../imagens/livro2.png'


const UltimosLancamentosContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    `

const LivrosLacamentosContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-top: 40px;
    padding-bottom: 18px;
`

const Livros = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: white;
    background-color: #003468;
    text-align: center;
    padding: 7px;
    border-radius: 5px;
    box-shadow: 7px 9px 4px 0px rgba(0,0,0,0.39);
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <TituloUltimoLancamentos cor="#003468" tamanhoFonte="3em">Ultimos Lançamentos</TituloUltimoLancamentos>
            <LivrosLacamentosContainer>
                {
                    LivrosUltimosLancamentos.map(livro => (
                        <Livros>
                            <p>{livro.titulo}</p>
                            <img
                                src={livro.capa}
                            ></img>
                        </Livros>
                    ))
                }
            </LivrosLacamentosContainer>

            <CardRecomendados
                titulo="Rafael é Lindo"
                subtitulo="Rafael é Lindo Subtitulo"
                descricao="Rafael é Lindo Descricao"
                imagem={imagemLivro}
            />

            <CardRecomendados
                titulo="Jessica é Linda"
                subtitulo="Jessica é Linda Subtitulo"
                descricao="Jessica é Lindaaaaaaaaaaaaaaa Descricao"
                imagem={imagemLivro}
            />


        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos