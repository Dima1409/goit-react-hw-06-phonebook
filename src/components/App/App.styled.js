import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.font};
}
`
const Container = styled.div`
width: 300px;
margin: 0 auto;
padding: 20px 10px;
position: relative;
@media screen and (min-width: 768px) {
width: 768px;
}
@media screen and (min-width: 1280px) {
width: 1280px;
}
`
const ContainerList = styled.div`
text-align: center;
margin: 0 auto;
background-color: ${({theme}) => theme.colors.body};
padding: 0 10px;
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
color: ${({theme})=>theme.colors.font};
`

export {Container, ContainerList, ListTitle, FormTitle, ListIsEmpty, Global};