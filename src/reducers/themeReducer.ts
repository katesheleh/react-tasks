const initialState: ThemeReducerStateType = {
	themeMode: 'light'
}

export const themeReducer = (state: ThemeReducerStateType = initialState, action: InitReducerActionsType) => {
	switch (action.type) {
		case 'COLOR_THEME':
			return {...state, themeMode: action.themeMode}
		default:
			return state
	}
}

export const themeColorAC = (themeMode: ThemeStyleType) => ({type: 'COLOR_THEME', themeMode} as const)


// TYPES
export type ThemeReducerStateType = {
	themeMode: ThemeStyleType
}

export type ThemeStyleType = 'dark' | 'light' | 'danger'

type themeColorACType = ReturnType<typeof themeColorAC>

type InitReducerActionsType = themeColorACType

