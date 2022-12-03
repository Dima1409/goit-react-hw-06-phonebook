import styled from 'styled-components';

const ModeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 15px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.main};
  /* color: ${({cl})=>cl}; */
  color: ${({theme}) => theme.colors.font};
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
  box-shadow: 0 0 6px  ${({theme}) => theme.colors.font};
  }
`
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
`
export {ModeButton, Wrapper};