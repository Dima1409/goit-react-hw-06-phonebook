import styled from 'styled-components';

const List = styled.ol`
font-size: 18px;
text-align: start;
`;

const ListItem = styled.li`
padding: 2px 5px;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 320px;
margin-bottom: 5px;
&:last-child {
    margin-bottom: 0;
}
`;
const DeleteButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
background-color: ${({theme}) => theme.colors.main};
border: none;
color: ${({theme}) => theme.colors.font};;
cursor: pointer;
transition: all 250ms;

&:hover, 
&:focus, 
&:active {
    box-shadow: 0 0 6px  ${({theme}) => theme.colors.font};
}
`
const ItemInfo = styled.p`
display: flex;
justify-content: space-between;
`

export { List, ListItem, DeleteButton, ItemInfo};