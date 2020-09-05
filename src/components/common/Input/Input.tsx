import React, {ChangeEvent, KeyboardEvent, useCallback} from 'react';
import styles from './Input.module.css';


const Input = React.memo((props: InputType) => {

	const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value), [props.value])

	const onKeyInputPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13) {
			props.onKeyPress()
		}
	}, [props.onKeyPress])

	const onBlur = useCallback(() => {
		if (props.onBlur) {
			props.onBlur()
		}
	}, [props.onBlur])

	return <input
			type='text'
			value={props.value}
			autoFocus={props.autoFocus}
			onChange={onInputChange}
			onKeyPress={onKeyInputPressHandler}
			onBlur={onBlur}
			className={`${styles.input} ${props.error && styles.error}`}/>
})

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