import React, {useState} from 'react';
import UserMessage from '../UserMessage/UserMessage';
import Todo, {PriorityType, TasksType} from '../Todo/Todo';
import SayHi from '../SayHi/SayHi';
import Checkbox from '../common/Checkbox/Checkbox';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

const PreJunior = () => {
	const [tasks, setTasks] = useState<Array<TasksType>>([
		{id: 1, name: 'Paddle Surf', priority: 'middle'},
		{id: 2, name: 'Learn JS', priority: 'high'},
		{id: 3, name: 'Learn React', priority: 'high'},
		{id: 4, name: 'Swim', priority: 'middle'},
		{id: 5, name: 'Sleep', priority: 'low'},
		{id: 6, name: 'Buy bread', priority: 'low'},
		{id: 7, name: 'Do something', priority: 'low'}
	])

	let [filter, setFilter] = useState<PriorityType>('all')

	// Task2: remove task
	function removeTask(id: number) {
		let newTasks = tasks.filter(task => task.id !== id)
		setTasks([...newTasks])
	}

	// Task 2: filter tasks by priority
	let filteredTasks = tasks;
	if (filter === 'high') {
		filteredTasks = tasks.filter(task => task.priority === filter)
	}
	if (filter === 'middle') {
		filteredTasks = tasks.filter(task => task.priority === filter)
	}
	if (filter === 'low') {
		filteredTasks = tasks.filter(task => task.priority === filter)
	}

	function changeFilter(value: PriorityType) {
		setFilter(value)
	}


	// Task 3: SayHi State
	const [inputValue, setInputValue] = useState<string>('')
	const changeInputValue = (newValue: string) => setInputValue(newValue)

	// Task 4: demo state for a standard input
	const [inputValueTask4, setInputValueTask4] = useState<string>('')
	const [checked, setChecked] = useState<boolean>(true)
	const onChangeInputTask4 = (newValue: string) => setInputValueTask4(newValue)
	const onKeyPressInputTask4 = () => setInputValueTask4('');
	const onCheckboxChange = (checked: boolean) => setChecked(checked)
	return (
			<div>
				<h1>PreJunior</h1>
				<h2>Task 1: Message block</h2>
				<UserMessage
						name={'Katia'}
						message={'How are you?'}/>

				<br/>
				<br/>
				<br/>

				<h2>Task 2: Filter an array</h2>
				<Todo
						tasks={filteredTasks}
						filterTasks={changeFilter}
						removeTask={removeTask}
				/>

				<br/>
				<br/>
				<br/>

				<h2>Task 3: Say Hi</h2>
				<SayHi
						value={inputValue}
						onChange={changeInputValue}/>

				<h2>Task 4: Standard Components</h2>

				<Checkbox checked={checked} onChange={onCheckboxChange}/>
				<Input value={inputValueTask4} onChange={onChangeInputTask4} onKeyPress={onKeyPressInputTask4} error={true}/>
				<Button text={'I am a demo btn'} onClick={() => alert('Hello')} style={'danger'}/>

				<br/>
				<br/>
				<br/>

			</div>
	)
}

export default PreJunior;