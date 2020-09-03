import React, {ChangeEvent} from 'react';

const Select = (props: PropsType) => {

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		props.onChange(e.currentTarget.value)
		console.log(e.currentTarget.value)
	}
	return (
			<select onChange={onSelectChange} value={props.valueSelected}>
				{props.values.map((v) => <option key={v.id} value={v.value}>{v.label}</option>)}
			</select>
	)
}

export default Select;

// TYPES
type PropsType = {
	values: ValuesType[]
	valueSelected: string
	onChange: (val: string) => void
}

export type ValuesType = {
	id: string
	value: string
	label: string
}