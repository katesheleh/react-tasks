import React, {ChangeEvent, useState} from 'react';
import {v1} from 'uuid';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

const SayHi = (props: SayHiType) => {

	let [names, setNames] = useState<Array<NameType>>([])

	function sayHi() {
		if (props.value) {
			alert(`Hi, ${props.value}`)
			props.onChange('')
		}
	}

	const addNewName = () => {
		let newName: NameType = {id: v1(), name: props.value}
		names = [...names, newName]
		setNames([...names])
	}

	const onKeyInputPressHandler = () => {
		sayHi()
		addNewName()
	}

	const onClickBtnHandler = () => {
		sayHi()
		addNewName()
	}

	return (
			<>
				<Input onChange={props.onChange} onKeyPress={onKeyInputPressHandler} value={props.value}/>
				<Button text={'Say Hi'} onClick={onClickBtnHandler}/>

				<div>( {names.length} )</div>
				{names.map(n => <p key={n.id}>{n.name} </p>)}
			</>
	)
}

export default SayHi;


// TYPES
export type SayHiType = {
	value: string
	onChange: (newValue: string) => void
}

export type NameType = {
	id: string
	name: string
}