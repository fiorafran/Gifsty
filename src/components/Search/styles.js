import styled from 'styled-components';

const Span = styled.span`
    width: ${({ width }) => width || 0}em;
    height: 5px;
    background-color: red;
    display: block;
    transition: width .5s ease;
`;

export default Span;