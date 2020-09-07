import {hwReducer} from './homeWorkReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {initReducer} from './initReducer';
import {themeReducer} from './themeReducer';
import thunkMiddleware from 'redux-thunk'
import {requestReducer} from './requestReducer';

const rootReducer = combineReducers({
	homework: hwReducer,
	init: initReducer,
	theme: themeReducer,
	request: requestReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;