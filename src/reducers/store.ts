import {hwReducer} from './homeWorkReducer';
import {combineReducers, createStore} from 'redux';
import {initReducer} from './initReducer';

const rootReducer = combineReducers({
	homework: hwReducer,
	init: initReducer
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;