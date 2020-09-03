import {checkAgeAC, hwReducer, InitialStateType, sortDownNamesAC, sortUpNamesAC} from './homeWorkReducer';

let startState: Array<InitialStateType> = []

beforeEach(() => {
	startState = [
		{id: '1', name: 'Katia', age: 12},
		{id: '2', name: 'Denis', age: 20},
		{id: '3', name: 'Toni', age: 16},
		{id: '4', name: 'Alisa', age: 23},
	]
})

test('Names should be sorted UP', () => {
	const endState = hwReducer(startState, sortUpNamesAC(startState))

	expect(endState[0].name).toBe('Alisa')
	expect(endState[3].name).toBe('Toni')
})

test('Names should be sorted DOWN', () => {
	const endState = hwReducer(startState, sortDownNamesAC(startState))

	expect(endState[0].name).toBe('Toni')
	expect(endState[3].name).toBe('Alisa')
})

test('Should be shown people 18+', () => {
	const endState = hwReducer(startState, checkAgeAC(startState))

	expect(endState.length).toBe(2)
	expect(endState[0].age).toBe(20)
	expect(endState[1].name).toBe('Alisa')

})