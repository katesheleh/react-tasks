import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Input.module.css';


const Input = (props: InputType) => {

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value)

	const onKeyInputPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13) {
			props.onKeyPress()
		}
	}

	const onBlur = () => {
		if (props.onBlur) {
			props.onBlur()
		}
	}

	return <input
			type='text'
			value={props.value}
			autoFocus={props.autoFocus}
			onChange={onInputChange}
			onKeyPress={onKeyInputPressHandler}
			onBlur={onBlur}
			className={`${styles.input} ${props.error && styles.error}`}/>
}

export default Input;


// TYPES
export type InputType = {
	value: string
	onChange: (newValue: string) => void
	onKeyPress: () => void
	error?: boolean
	autoFocus?: boolean
	onBlur?: () => void
}