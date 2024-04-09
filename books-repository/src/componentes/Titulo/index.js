import styled from 'styled-components'

export const TituloUltimoLancamentos = styled.h1`
    text-align: center;
    background-color: #C1DBE3;
    margin: 0;
    padding: 10px 0px;
    width: 100%;

    /* Modificados por props */
    color: ${props => props.cor || "#000"};
    font-size: ${props => props.tamanhoFonte || "1em"};
`