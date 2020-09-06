import {hwReducer} from './homeWorkReducer';
import {combineReducers, createStore} from 'redux';
import {initReducer} from './initReducer';
import {themeReducer} from './themeReducer';

const rootReducer = combineReducers({
	homework: hwReducer,
	init: initReducer,
	theme: themeReducer
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;