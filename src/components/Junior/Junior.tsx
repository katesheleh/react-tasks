import React, {useState} from 'react';
import EditableSpan from '../common/EditableSpan/EditableSpan';
import {restoreState, saveState} from '../../utils/localStorage';
import Button from '../common/Button/Button';
import Select, {ValuesType} from '../common/Select/Select';
import Radio from '../common/Radio/Radio';

const Junior = () => {

	// task 6
	const startValue = 'double click';
	const [value, setValue] = useState(startValue)
	const onEditableSpanValueChange = (newValue: string) => setValue(newValue)
	const saveData = () => saveState<StateType>('saveState', {value: value})
	const restoreData = () => restoreState<StateType>('saveState', {value: startValue})

	// task 7

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
			</div>
	)
}

export default Junior;

// TYPES
export type StateType = {
	value: string
}

