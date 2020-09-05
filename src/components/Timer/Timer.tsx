import React, {useEffect, useState} from 'react';

// add '0' for hours/minutes/seconds with value less than 10
const get2DigitsString = (value: number) => value < 10 ? `0${value}` : value

const Timer = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const setIntervalID = setInterval(() => setDate(new Date()), 1000)
		// stop function when the component dies (like "ComponentWillUnmount")
		return () => clearInterval(setIntervalID)
	}, [])

	return (
			<div>
				<h4>Clock</h4>
				<div>
					<span>{get2DigitsString(date.getHours())}</span>:
					<span>{get2DigitsString(date.getMinutes())}</span>:
					<span>{get2DigitsString(date.getSeconds())}</span>
				</div>
			</div>
	)
}

export default Timer;