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
    background-color: ${({ theme }) => theme.inputBg};
    color: ${({ theme }) => theme.inputColor};
    margin: 15px auto 0 auto;
    width: 22vw;
    height: 3vh;
    font-size: 20px;
    outline: none;
    border: 0;
    border-bottom: 1px solid #c7c7c7;
    text-align: center;
    @media (max-width: 600px) {
        width: 60vw;
        margin: 25px auto 0 auto;
    }
`;

export const Span = styled.span`
    width: ${({ width }) => width < 22.6 ? width : 22.6 || 0}vw;
    height: 5px;
    background-color: ${({ theme }) => theme.spanColor};
    display: block;
    transition: width .5s ease;
    @media (max-width: 600px) {
        width: ${({ width }) => width * 2.5 < 60.6 ? width * 2.5 : 60.6 || 0}vw;
    }
`;