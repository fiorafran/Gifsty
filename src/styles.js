import styled, { createGlobalStyle } from 'styled-components';

export const RadioWrapper = styled.div`
    display: flex;
    position: absolute;
    right: 1em;
    top: 0.5em;
    @media (max-width: 600px) {
        right: 5.8em;
        top: 3em; 
    }
    `;

export const RadioLabel = styled.label`
    display: flex;
    flex-direction: row-reverse
`;
export const RadioInput = styled.input`
    margin-top: 4px;
`;

export const MainWrapper = styled.div`
margin: 0;
background-color: ${({ theme }) => theme.bgColor};
color: ${({ theme }) => theme.Color};
`;

export const AppTitle = styled.h2`
text-align: center;
width: 50vw;
padding: 5px; 
border-bottom: 2px solid #ccc;
margin: 0 auto 1em auto;
`;
export const GlobalCss = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600&display=swap');
    body {
        background-color: ${({ theme }) => theme.bgColor};
        color: ${({ theme }) => theme.Color};
        margin: 0;
        font-family: 'Readex Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;