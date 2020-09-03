import React, {useState} from 'react';
import Input from '../Input/Input';

const EditableSpan = (props: PropsType) => {
	const [editMode, setEditMode] = useState(false)

	const onDoubleClick = () => setEditMode(true)

	const onBlur = () => {
		props.onChange(props.value)
		setEditMode(false)
	}

	const onKeyPress = () => {
		props.onChange(props.value)
		setEditMode(false)
	}

	return (
			<div>
				{
					editMode
							? <Input
									value={props.value}
									autoFocus={true}
									onBlur={onBlur}
									onChange={props.onChange}
									onKeyPress={onKeyPress}/>

							: <span onDoubleClick={onDoubleClick}>{props.value}</span>
				}
			</div>
	)
}

export default EditableSpan;

// TYPES
type PropsType = {
	value: string
	onChange: (newValue: string) => void
}