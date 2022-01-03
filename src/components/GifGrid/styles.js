import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transition: all .5s ease-in-out;
    justify-content: center;
    margin-bottom: 3em;
`;

export const SearchTitle = styled.h3`
    text-align: left;
    padding: 0em 0px 0.7em 1em;
    border-bottom: 2px solid #e3e3e3;
    width: 90vw;
    margin: 20px auto;
`;
export const GifWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #d7d7d7;
    border-radius: 10px;
    margin: 10px;
    overflow: hidden;
    transition: all .3s ease-in-out;

    &:hover {
        box-shadow: 8px 8px 1px 0px rgb(0 0 0 / 75%)
    }
`;
export const ImageTitle = styled.p`
    text-align: center;
`;
export const Image = styled.img`
    max-height: 200px;
    min-width: 250px;
    transition: all .5s ease-in-out;
`;