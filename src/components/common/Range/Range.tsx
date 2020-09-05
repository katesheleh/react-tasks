import React, {ChangeEvent, useCallback} from 'react';

export const Range = React.memo((props: RangePropsType) => {

	const onRangeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => props.onChange(+e.target.value), [props.value])

	return (
			<label>
				<input
						type='range'
						min={props.minValue}
						max={props.maxValue}
						value={props.value}
						onChange={onRangeChange}/>
				{props.value}
			</label>
	)
})

export default Range;

// TYPES
export type RangePropsType = {
	minValue: number
	maxValue: number
	value: number
	onChange: (newValue: number) => void
}