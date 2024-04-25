import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {getFavoritos} from "../servicos/favoritos"

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #003366, #3399ff);
`

function Favoritos(){
    const [favoritos, setFavoritos] = useState([])

    async function fetchFavoritos(){
        const favoritosAPI = await getFavoritos()
        setFavoritos(favoritosAPI)
    }

    useEffect(() => {
        fetchFavoritos()
    })

    return(
        <AppContainer>
           {favoritos.map( favorito => (
            <p>{favorito.nome}</p>
           ) )}
        </AppContainer>
    )
}

export default Favoritos;