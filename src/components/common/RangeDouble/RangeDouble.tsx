import React, {ChangeEvent} from 'react';
import styles from './RangeDouble.module.css';

export const RangeDouble = React.memo((props: RangePropsType) => {
	const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChangeMin(+e.target.value < props.valueMaxActive ? +e.target.value : props.valueMaxActive)
	}

	const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChangeMax(+e.target.value > props.valueMinActive ? +e.target.value : props.valueMinActive)
	}

	return (
			<div className={styles.rangeSlider}>
				<span>Min: {props.valueMinActive} - Max: {props.valueMaxActive}</span>
				<input type="range"
							 className={styles.input}
							 value={props.valueMinActive}
							 onChange={handleMinChange}
							 min={props.minValue}
							 max={props.maxValue}/>
				<input type="range"
							 className={styles.input}
							 value={props.valueMaxActive}
							 onChange={handleMaxChange}
							 min={props.minValue}
							 max={props.maxValue}/>
			</div>
	)
})

export default RangeDouble;

// TYPES
export type RangePropsType = {
	minValue: number
	maxValue: number
	valueMinActive: number
	onChangeMin: (newValue: number) => void
	valueMaxActive: number
	onChangeMax: (newValue: number) => void
}