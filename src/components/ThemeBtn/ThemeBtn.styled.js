import styled from 'styled-components';

const ModeButton = styled.button`
  padding: 15px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  border: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
  box-shadow: 0 0 4px  ${({theme}) => theme.colors.font};
  }
`
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
`
export {ModeButton, Wrapper};