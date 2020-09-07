import {Dispatch} from 'redux'
import {requestApi} from '../api/request-api';

let initialState: RequestReducerStateType = {
	success: false,
	error: ''
}

export const requestReducer = (state: RequestReducerStateType = initialState, action: InitReducerActionsType) => {
	switch (action.type) {
		case 'REQUEST':
			return {...state, success: action.success}
		case 'REQUEST_ERROR':
			return {...state, error: action.error}
		default:
			return state
	}
}

export const requestAC = (success: boolean) => ({type: 'REQUEST', success} as const)
export const errorAC = (error: string) => ({type: 'REQUEST_ERROR', error} as const)

// THUNK
export const requestTC = (success: boolean) => {
	return (dispatch: Dispatch<any>) => {
		requestApi.request(success)
				.then((res) => dispatch(requestAC(success)))
				.catch((error) => {
					dispatch(errorAC(error))
				})
	}
}


// TYPES
export type RequestReducerStateType = {
	success: boolean
	error: string
}

type requestACType = ReturnType<typeof requestAC>
type errorACType = ReturnType<typeof errorAC>

type InitReducerActionsType = requestACType | errorACType

