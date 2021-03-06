import React, {useState} from 'react';
import EditableSpan from '../common/EditableSpan/EditableSpan';
import {restoreState, saveState} from '../../utils/localStorage';
import Button from '../common/Button/Button';
import Select, {ValuesType} from '../common/Select/Select';
import Radio from '../common/Radio/Radio';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../reducers/store';
import {
	checkAgeAC,
	InitialStateType,
	sortDownNamesAC,
	sortDataAC,
	sortUpNamesAC
} from '../../reducers/homeWorkReducer';
import Timer from '../Timer/Timer';
import Preloader from '../common/Preloader/Preloader';
import {InitReducerStateType, loadingAC} from '../../reducers/initReducer';
import Range from '../common/Range/Range';
import RangeDouble from '../common/RangeDouble/RangeDouble';

const Junior = () => {

	// task 6 (variables and callbacks)
	const startValue = 'double click';
	const [value, setValue] = useState(startValue)
	const onEditableSpanValueChange = (newValue: string) => setValue(newValue)
	const saveData = () => saveState<StateType>('saveState', {value: value})
	const restoreData = () => setValue(restoreState<StateType>('saveState', {value: startValue}).value)

	// task 7 (variables and callbacks)
	const choices: ValuesType[] = [
		{id: '1', value: 'play-football', label: 'Play Football'},
		{id: '2', value: 'learn-react', label: 'Learn React'},
		{id: '3', value: 'yoga', label: 'Yoga'},
		{id: '4', value: 'gym', label: 'GYM'}
	]
	const [selectValue, setSelectValue] = useState(choices[0].value)
	const onSelectChange = (newValue: string) => setSelectValue(newValue)

	const [radioValue, setRadioValue] = useState('')
	const onRadioChange = (newValue: string) => setRadioValue(newValue)

	// task 8 (variables and callbacks)
	const people = useSelector<AppRootStateType, InitialStateType[]>(state => state.homework)
	const dispatch = useDispatch()

	const sortUp = () => dispatch(sortDataAC(people, 'up'))
	const sortDown = () => dispatch(sortDataAC(people, 'down'))
	const checkAge = () => dispatch(checkAgeAC(people))

	// task 10 (variables and callbacks)
	const loading = useSelector<AppRootStateType, InitReducerStateType>(state => state.init)

	const setLoading = () => {
		dispatch(loadingAC(true))
		setTimeout(() => {
			dispatch(loadingAC(false))
		}, 3000)
	}

	// task 11 (variables and callbacks)
	const [rangeValue, setRangeValue] = useState(0);
	const onRangeChange = (newValue: number) => setRangeValue(newValue)
	const initMin = 0;
	const initMax = 34;
	const [rangeDoubleValueMin, setRangeDoubleValueMin] = useState(initMin);
	const [rangeDoubleValueMax, setRangeDoubleValueMax] = useState(initMax);
	const onRangeChangeMin = (newValue: number) => setRangeDoubleValueMin(newValue)
	const onRangeChangeMax = (newValue: number) => setRangeDoubleValueMax(newValue)
	return (
			<div>
				<h1>Junior</h1>
				<h2>Task 6: Editable Span</h2>
				<EditableSpan value={value} onChange={onEditableSpanValueChange}/>

				<Button text={'Save Data'} onClick={saveData}/>
				<Button text={'Restore Data'} onClick={restoreData}/>

				<br/>
				<br/>
				<br/>

				<h2>Task 7: Select and Radio</h2>
				<h3>Select</h3>
				<Select values={choices} valueSelected={selectValue} onChange={onSelectChange}/>

				<h3>Radio</h3>
				<Radio name={'rightChoice'} values={choices} valueSelected={radioValue} onChange={onRadioChange}/>

				<br/>
				<br/>
				<br/>

				<h2>Task 8: Reducer - sort up/down, filter</h2>
				{people.map((p) => <p key={p.id}>{p.name} --- {p.age}</p>)}
				<Button text={'Names Sort (UP)'} onClick={sortUp}/>
				<Button text={'Names Sort (DOWN)'} onClick={sortDown}/>
				<Button text={'Show People 18+'} onClick={checkAge}/>

				<br/>
				<br/>
				<br/>

				<h2>Task 9: Timer</h2>
				<Timer/>

				<br/>
				<br/>
				<br/>

				<h2>Task 10: Loading...</h2>
				{loading.loading && <Preloader/>}
				<Button text={'Show Preloader'} onClick={setLoading}/>

				<br/>
				<br/>
				<br/>

				<h2>Task 11: Range</h2>
				<h4>Range Simple:</h4>
				<Range minValue={0} maxValue={20} value={rangeValue} onChange={onRangeChange}/>

				<h4>Range Double:</h4>
				<RangeDouble
						minValue={initMin}
						maxValue={initMax}
						valueMinActive={rangeDoubleValueMin}
						onChangeMin={onRangeChangeMin}
						valueMaxActive={rangeDoubleValueMax}
						onChangeMax={onRangeChangeMax}/>
			</div>
	)
}

export default Junior;

// TYPES
export type StateType = {
	value: string
}

