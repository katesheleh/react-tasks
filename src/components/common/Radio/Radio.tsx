import React, {ChangeEvent, useCallback} from 'react';

const Radio = React.memo((props: PropsType) => {

	const onRadioChange = useCallback((e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value), [props.valueSelected])

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
})

export default Radio;

// TYPES
type PropsType = {
	name: string
	values: ValuesType[]
	valueSelected: any
	onChange: (val: any) => void
}

export type ValuesType = {
	id: string
	value: any
	label: string
}