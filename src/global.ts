import {createGlobalStyle} from 'styled-components';
import {DefaultThemeType} from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultThemeType }>`
  body {
		background: ${({theme}) => theme.bgColor};
  	color: ${({theme}) => theme.textColor};    
  }`