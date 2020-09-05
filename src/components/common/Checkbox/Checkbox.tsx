import React, {ChangeEvent, useCallback} from 'react';
import styles from './Checkbox.module.css';

const Checkbox = React.memo((props: InputType) => {

	const onCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.checked), [props.checked])

	return <input type='checkbox' checked={props.checked} onChange={onCheckboxChange} className={styles.checkbox}/>
})

export default Checkbox;


// TYPES
export type InputType = {
	checked: boolean
	onChange: (checked: boolean) => void
}