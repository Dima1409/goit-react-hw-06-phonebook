import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.font};
}
`

const ContainerList = styled.div`
text-align: center;
max-width: 630px;
margin: 0 auto;
padding: 10px 40px;
background-color: ${({theme}) => theme.colors.body};
`;
const FormTitle = styled.h1`
font-size: 28px;
text-align: center;
margin-bottom: 20px;
`;
const ListTitle = styled.h2`
margin-bottom: 10px;
font-size: 28px;
`;
const ListIsEmpty = styled.p`
font-size: 18px;
color: red;
`

export {ContainerList, ListTitle, FormTitle, ListIsEmpty, Global};