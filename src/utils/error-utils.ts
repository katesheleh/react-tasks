import {Dispatch} from 'redux'
import {errorAC, ErrorACType} from "../reducers/requestReducer";

export const handleError = (error: {errorText: string}, dispatch: Dispatch<ErrorACType>) => {
    dispatch(errorAC(error.errorText ? error.errorText : 'Some error occurred'))
}