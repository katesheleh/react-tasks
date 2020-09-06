import 'styled-components';

export const lightTheme: DefaultThemeType = {
	bgColor: '#E2E2E2',
	textColor: '#363537',
}

export const darkTheme: DefaultThemeType = {
	bgColor: '#363537',
	textColor: '#FAFAFA',
}

export const dangerTheme: DefaultThemeType = {
	bgColor: '#b53737',
	textColor: '#FAFAFA',
}

// TYPES
export type DefaultThemeType = {
	bgColor: string
	textColor: string
}
