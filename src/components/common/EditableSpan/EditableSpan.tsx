import React, {useCallback, useState} from 'react';
import Input from '../Input/Input';

const EditableSpan = React.memo((props: PropsType) => {
	const [editMode, setEditMode] = useState(false)

	const onDoubleClick = useCallback(() => setEditMode(true), [editMode])

	const onBlur = useCallback(() => {
		props.onChange(props.value)
		setEditMode(false)
	}, [props.value])

	const onKeyPress = useCallback(() => {
		props.onChange(props.value)
		setEditMode(false)
	}, [props.value])

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
})

export default EditableSpan;

// TYPES
type PropsType = {
	value: string
	onChange: (newValue: string) => void
}