import styled from 'styled-components'

export const TituloUltimoLancamentos = styled.h1`
    background-color: white;
    text-align: center;
    width: 40%;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid #FD8325; 

    /* Modificados por props */
    color: ${props => props.cor || "#000"};
    font-size: ${props => props.tamanhoFonte || "1em"};
`