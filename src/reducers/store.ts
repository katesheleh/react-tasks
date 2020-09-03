import {hwReducer} from './homeWorkReducer';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
	homework: hwReducer
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;