import {Dispatch} from 'redux'
import {requestApi} from '../api/request-api';
import {handleError} from "../utils/error-utils";


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
            .then((res) => {
                dispatch(requestAC(success))
            })
            .catch((error) => {
                handleError(error, dispatch)
            })
    }
}


// TYPES
export type RequestReducerStateType = {
    success: boolean
    error: string
}

type RequestACType = ReturnType<typeof requestAC>
export type ErrorACType = ReturnType<typeof errorAC>

type InitReducerActionsType = RequestACType | ErrorACType

