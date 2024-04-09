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
    padding-bottom: 40px;
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

            <TituloUltimoLancamentos cor="#003468" tamanhoFonte="3em">Livros Recomendados</TituloUltimoLancamentos>

            <CardRecomendados
                titulo="Recomendamos"
                subtitulo="Livro Muito Legal"
                descricao="Esse é a descrição do livro legal"
                imagem={imagemLivro}
            />

            <CardRecomendados
                titulo="Recomoda-se"
                subtitulo="Livrão Iradão"
                descricao="Descrição do livrão iradão"
                imagem={imagemLivro}
            />


        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos