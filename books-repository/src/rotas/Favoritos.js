import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {deleteFavoritos, getFavoritos} from "../servicos/favoritos"

const AppContainer = styled.div`
    height: 100vh;
    background: linear-gradient(90deg, #003366, #3399ff);
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    gap: 20px;
`

const FavoritoContainer = styled.div`
    border: 1px solid white;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
`

const Favorito = styled.p`
    color: white; 
    display: block;
    font-size: 1.6em;
`

const Titulo = styled.h1`
    color: white;
`

function Favoritos(){
    const [favoritos, setFavoritos] = useState([])

    async function fetchFavoritos(){
        const favoritosAPI = await getFavoritos()
        setFavoritos(favoritosAPI)
    }

    async function deletarFavorito(id){
        await deleteFavoritos(id)
        await fetchFavoritos()
        alert(`Livro favorito de ID: ${id} excluido com sucesso!`)
    }

    useEffect(() => {
        fetchFavoritos()
    })

    return(
        <AppContainer>
            <Titulo>Aqui estão seus livros favoritos!</Titulo>

           {favoritos.map( favorito => (
            <FavoritoContainer onClick={() => deletarFavorito(favorito.id)}>
            <Favorito>{favorito.nome}</Favorito>
            </FavoritoContainer>
           ) )}

        </AppContainer>
    )
}

export default Favoritos;