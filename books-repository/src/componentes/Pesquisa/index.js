import InputPadrao from "../InputPadrao"
import styled from "styled-components"
import { useState } from "react"
import { repositoriosLivros } from './livrosPesquisa.js'

const PesquisaContainer = styled.section`
    width: 100vw;
    height: 600px;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
`

const Titulo = styled.h2`
    color: white;
    font-size: 36px;
    margin: 0;
`

const Subtitulo = styled.h3`
    color: white;
    font-size: 24px;
    margin: 0;
`

const LivrosContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
`

const Livro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-size: 1.5;
`

function Pesquisa() {

    const [livroEscolhido, setLivroEscolhido] = useState([])
    console.log("Valor do Livro escolhido", livroEscolhido)

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <InputPadrao
                type="text"
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const livros = repositoriosLivros.filter(itemLista => itemLista.titulo.includes(textoDigitado));

                    console.log(livros)

                    if(livros.length >= 6){
                        setLivroEscolhido([])
                    } else {
                        setLivroEscolhido(livros)
                    }
                }}
            />

            <LivrosContainer>
                {livroEscolhido.map(livro => (
                    <Livro>
                        <p>{livro.titulo}</p>
                        <img
                            src={livro.capa}
                        />
                    </Livro>
                ))}
            </LivrosContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa 