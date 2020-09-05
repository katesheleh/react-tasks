const initialState: InitReducerStateType = {
	loading: false
}

export const initReducer = (state: InitReducerStateType = initialState, action: InitReducerActionsType) => {
	switch (action.type) {
		case 'SET_LOADING':
			return {...state, loading: action.loading}
		default:
			return state
	}
}

export const loadingAC = (loading: boolean) => ({type: 'SET_LOADING', loading} as const)


// TYPES
export type InitReducerStateType = {
	loading: boolean
}

type loadingAC = ReturnType<typeof loadingAC>

type InitReducerActionsType = loadingAC

