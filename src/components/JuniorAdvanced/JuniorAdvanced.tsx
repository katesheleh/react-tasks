import React from 'react';
import Radio from '../common/Radio/Radio';
import {ValuesType} from '../common/Select/Select';
import {ThemeStyleType} from '../../reducers/themeReducer';
import Request from '../Request/Request';

const JuniorAdvanced = (props: JuniorAdvancedType) => {

	const choices: ValuesType[] = [
		{id: '1', value: 'light', label: 'Light Theme'},
		{id: '2', value: 'dark', label: 'Dark Theme'},
		{id: '3', value: 'danger', label: 'Danger Theme'},
	]

	return (
			<div>
				<h1>Junior + </h1>
				<br/>
				<h2>Task 12: Theme Switcher</h2>
				<Radio name={'colorThemeSwitcher'} values={choices} valueSelected={props.theme} onChange={props.onChange}/>

				<br/>
				<br/>
				<br/>

				<h2>Task 13: Request</h2>
				<Request/>
			</div>
	)
}

export default JuniorAdvanced;


// TYPES
type JuniorAdvancedType = {
	theme: ThemeStyleType;
	onChange: (newValue: ThemeStyleType) => void
}