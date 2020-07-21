import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {v1} from 'uuid';

export type InputType = {
	value: string
	onChange: (newValue: string) => void
}

export type NameType = {
	id: string
	name: string
}


const Input = (props: InputType) => {

	let [names, setNames] = useState<Array<NameType>>([])

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(e.currentTarget.value)
	}

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

	const onKeyInputPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13) {
			sayHi()
			addNewName()
		}
	}

	const onClickBtnHandler = () => {
		sayHi()
		addNewName()
	}

	return (
			<>
				<input
						type='text'
						value={props.value}
						onChange={onInputChange}
						onKeyPress={onKeyInputPressHandler}/>

				<button onClick={onClickBtnHandler}>Say Hi</button>

				<div>( {names.length} )</div>
				{names.map(n => <p key={n.id}>{n.name} </p>)}
			</>
	)
}

export default Input;