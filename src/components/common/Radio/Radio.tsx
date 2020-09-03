import React, {ChangeEvent} from 'react';

const Radio = (props: PropsType) => {

	const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(e.target.value)
		console.log(e.target.value)
	}

	return (
			<div>
				{props.values.map((v) => {
					return (
							<label key={v.id}>
								<input
										type='radio'
										name={props.name}
										value={v.value}
										onChange={onRadioChange}
										checked={props.valueSelected === v.value}/>{v.label}
							</label>
					)
				})}
			</div>
	)
}

export default Radio;

// TYPES
type PropsType = {
	name: string
	values: ValuesType[]
	valueSelected: string
	onChange: (val: string) => void
}

export type ValuesType = {
	id: string
	value: string
	label: string
}