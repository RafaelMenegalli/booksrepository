import styled from "styled-components";

const InputPadrao = styled.input`
    color: white;
    padding: 15px 0;
    text-align: center;
    width: 500px;
    border-radius: 15px;
    border: 1px solid white;
    background-color: transparent;
    font-size: 16px;

    &::placeholder{
        color: white;
        font-size: 16px;
    }

    &:focus{
        outline: none;
    }
`

export default InputPadrao

