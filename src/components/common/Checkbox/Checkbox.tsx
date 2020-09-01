import React, {ChangeEvent} from 'react';
import styles from './Checkbox.module.css';

const Checkbox = (props: InputType) => {

	const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.checked)

	return <input type='checkbox' checked={props.checked} onChange={onCheckboxChange} className={styles.checkbox}/>
}

export default Checkbox;


// TYPES
export type InputType = {
	checked: boolean
	onChange: (checked: boolean) => void
}