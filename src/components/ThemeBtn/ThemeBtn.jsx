import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme } from 'redux/selectors';
import { setDarkTheme, setDefaultTheme } from 'redux/themeSlice';
import { ModeButton, Wrapper } from "./ThemeBtn.styled";
import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";
import { IconContext } from "react-icons";


const ThemeBtn = () => {
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);
    const setDefault = () => {
       dispatch(setDefaultTheme());
    } 
    const setDark = () => {
       dispatch(setDarkTheme()); 
    }
    return (
        <> 
        {!theme.darkTheme ? (
            <ModeButton onClick={setDark} bg="#3b3c36">
              <Wrapper>
              <IconContext.Provider value={{ color: "#F0FFFF", size: '25px' }}>
  <HiOutlineLightBulb/>
              </IconContext.Provider>
              </Wrapper>
            </ModeButton>
          ) : (
            <ModeButton onClick={setDefault} bg="#F0FFFF">
             <Wrapper>
             <IconContext.Provider value={{ color: "#3b3c36", size: '25px' }}>
              <HiOutlineMoon/>
              </IconContext.Provider>
             </Wrapper>
            </ModeButton>
          )}
        </>
       
    )
}
export default ThemeBtn;