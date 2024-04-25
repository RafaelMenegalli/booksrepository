import InputPadrao from "../InputPadrao"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { getLivros } from "../../servicos/livros"
import { postFavoritos } from "../../servicos/favoritos"

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
    const [repositoriosLivros, setRepositoriosLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, []);

    async function fetchLivros(){
        const livrosAPI = await getLivros()
        setRepositoriosLivros(livrosAPI)
    }

    async function insereFavorito(id){
        await postFavoritos(id)
        alert("Livro de ID: " + id + " adicionado aos favoritos!")
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <InputPadrao
                type="text"
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const livros = repositoriosLivros.filter(itemLista => itemLista.nome.includes(textoDigitado));

                    if (livros.length >= 6) {
                        setLivroEscolhido([])
                    } else {
                        setLivroEscolhido(livros)
                    }
                }}
            />

            <LivrosContainer>
                {livroEscolhido.map(livro => (
                    <Livro onClick={() => insereFavorito(livro.id)}>
                        <p>{livro.nome}</p>
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