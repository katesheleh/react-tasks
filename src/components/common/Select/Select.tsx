import React, {ChangeEvent, useCallback} from 'react';

const Select = React.memo((props: PropsType) => {

	const onSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => props.onChange(e.currentTarget.value), [props.valueSelected])
	return (
			<select onChange={onSelectChange} value={props.valueSelected}>
				{props.values.map((v) => <option key={v.id} value={v.value}>{v.label}</option>)}
			</select>
	)
})

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