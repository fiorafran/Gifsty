import styled from 'styled-components';

export const Form = styled.form`
    margin: auto;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SearchInput = styled.input`
    margin: 15px auto 0 auto;
    width: 22vw;
    height: 3vh;
    font-size: 20px;
    outline: none;
`;

export const Span = styled.span`
    width: ${({ width }) => width < 22.6 ? width : 22.6 || 0}vw;
    height: 5px;
    background-color: red;
    display: block;
    transition: width .5s ease;
`;