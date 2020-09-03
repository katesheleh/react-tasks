import React, {useState} from 'react';
import EditableSpan from '../common/EditableSpan/EditableSpan';
import {restoreState, saveState} from '../../utils/localStorage';
import Button from '../common/Button/Button';

const Junior = () => {
	const startValue = 'double click';
	const [value, setValue] = useState(startValue)
	const onEditableSpanValueChange = (newValue: string) => setValue(newValue)

	const saveData = () => saveState<StateType>('saveState', {value: value})
	const restoreData = () => restoreState<StateType>('saveState', {value: startValue})

	return (
			<div>
				<h1>Junior</h1>
				<h2>Task 6: Editable Span</h2>
				<EditableSpan value={value} onChange={onEditableSpanValueChange}/>

				<Button text={'Save Data'} onClick={saveData}/>
				<Button text={'Restore Data'} onClick={restoreData}/>
			</div>
	)
}

export default Junior;

// TYPES
export type StateType = {
	value: string
}

